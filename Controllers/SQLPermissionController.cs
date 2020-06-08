using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SQLJITApi;
using System.Data.SqlClient;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Data;
using SQLJITApi.Classes;

namespace JitPermissionSQL.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SQLPermissionController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            Request.Headers.TryGetValue("X-Conn", out var traceValue);

            var connString = System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(traceValue));

            string scriptpath = System.IO.Path.GetFullPath(@".\SQLScripts\getLogins.sql");

            DataTable dtlogins = SQLUtil.ScriptExecutor(scriptpath, connString);

            var permArr = new SQLPermission();
            
            permArr.logins = dtlogins.AsEnumerable().Select(x => x[0].ToString()).ToList();

            scriptpath = System.IO.Path.GetFullPath(@".\SQLScripts\getRoles.sql");
            DataTable dtroles = SQLUtil.ScriptExecutor(scriptpath, connString);

            permArr.roles = dtroles.AsEnumerable().Select(x => x[0].ToString()).ToList();



            string json = JsonConvert.SerializeObject(permArr, Formatting.Indented);


            return StatusCode(200, json);




        }

        [HttpPost]
        public ActionResult Post()
        {
            Request.Headers.TryGetValue("X-Conn", out var traceValue);

            //var connString = System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(traceValue));

            //string scriptpath = System.IO.Path.GetFullPath(@".\SQLScripts\getLogins.sql");
            //string jsonLogin = SQLUtil.JsonScriptExecutor(scriptpath, connString);


            //scriptpath = System.IO.Path.GetFullPath(@".\SQLScripts\getLogins.sql");
            //string jsonRole = SQLUtil.JsonScriptExecutor(scriptpath, connString);

            //JObject jmerge = JObject.Parse(jsonLogin);

            //jmerge.Merge(jsonRole, new JsonMergeSettings { MergeArrayHandling = MergeArrayHandling.Union });

            //string json = jmerge.ToString();



            return StatusCode(200, traceValue);

        }



    }
}
