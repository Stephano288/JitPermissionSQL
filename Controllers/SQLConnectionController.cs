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
            var payload = Convert.ToBase64String(System.Text.Encoding.ASCII.GetBytes(connstring.ConnectionString));
            Response.Headers.Add("X - ConnOpen", payload);
            return StatusCode(201);
            
        }
        








    }
}
