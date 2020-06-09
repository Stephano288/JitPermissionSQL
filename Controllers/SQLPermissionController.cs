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
using Newtonsoft.Json.Serialization;

namespace JitPermissionSQL.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SQLPermissionController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {

            string connString;

            try 
            { 
                Request.Headers.TryGetValue("X-Conn", out var traceValue);
                connString = System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(traceValue));
            }
            catch
            {
                return StatusCode(406);
            }

            var permArr = new SQLPermission();

            string scriptpath = System.IO.Path.GetFullPath(@".\SQLScripts\getLogins.sql");

            DataTable dtlogins = SQLUtil.ScriptExecutor(scriptpath, connString);
             
            permArr.Logins = dtlogins.AsEnumerable().Select(x => x[0].ToString()).ToList();

            scriptpath = System.IO.Path.GetFullPath(@".\SQLScripts\getRoles.sql");
            DataTable dtroles = SQLUtil.ScriptExecutor(scriptpath, connString);

            permArr.Roles = dtroles.AsEnumerable().Select(x => x[0].ToString()).ToList();

            string json = SQLUtil.ToJsonCamelCase(permArr);

            return StatusCode(200, json);




        }

        [HttpPost]
        public ActionResult Post(SQLPostJIT postJIT)
        {
            string connString;

            try
            {
                Request.Headers.TryGetValue("X-Conn", out var traceValue);
                connString = System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(traceValue));
            }
            catch
            {
                return StatusCode(406);
            }

             

            List<SqlParameter> sqlparams = new List<SqlParameter>();
            sqlparams.Add(new SqlParameter("@login_name", postJIT.Login));
            sqlparams.Add(new SqlParameter("@role_name", postJIT.Role));
            sqlparams.Add(new SqlParameter("@start" , postJIT.StartDate.ToDateTime() ));
            sqlparams.Add(new SqlParameter("@finish", postJIT.EndDate.ToDateTime() ));


            string scriptpath = System.IO.Path.GetFullPath(@".\SQLScripts\JitRole.sql");
            DataTable genguid = SQLUtil.ScriptExecutor(scriptpath, connString , sqlparams);

            string json = SQLUtil.ToJsonCamelCase(genguid);



            return StatusCode(201 , json);

        }



    }
}
