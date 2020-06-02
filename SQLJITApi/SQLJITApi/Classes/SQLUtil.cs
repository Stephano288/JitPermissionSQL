using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.IO;
using System.Runtime.CompilerServices;
using Newtonsoft.Json;

namespace SQLJITApi
{
    public  static class SQLUtil
    {
       public static string JsonScriptExecutor (string FilePath , List<SqlParameter> parameters , string connString )
        {


            string script;

            using (FileStream fstream = File.OpenRead(FilePath))
            {
                StreamReader reader = new StreamReader(fstream);
                script = reader.ReadToEnd();
            }

            System.Data.DataTable dt = new System.Data.DataTable();
            using (SqlConnection conn = new SqlConnection(connString))
            {
            
                using (SqlCommand cmd = new SqlCommand(script, conn))
                {
                    foreach (SqlParameter param in parameters)
                    {
                        cmd.Parameters.AddWithValue(param.ParameterName, param.Value);

                    }

                    using (SqlDataAdapter ada = new SqlDataAdapter(cmd))
                    {

                       ada.Fill(dt);
                    }
                }
            }
            string json = JsonConvert.SerializeObject(dt, Formatting.Indented);
            return json ;
        }
        
    }
}
