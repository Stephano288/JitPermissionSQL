using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SQLJITApi;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;

namespace JitPermissionSQL.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SQLConnectionController : ControllerBase
    {
            [HttpPost]
            public ActionResult Post(CustomSQLConnectionString connstring )
            {

                using (SqlConnection conn = new SqlConnection(connstring.ConnectionString))
            {
                conn.Open();

            }

            ConnToken connToken = new ConnToken();
            connToken.Token = Convert.ToBase64String(System.Text.Encoding.ASCII.GetBytes(connstring.ConnectionString)); ;
            string json = JsonConvert.SerializeObject(connToken, Formatting.Indented);
            return StatusCode(201 , json);
            
        }
        

    }
}
