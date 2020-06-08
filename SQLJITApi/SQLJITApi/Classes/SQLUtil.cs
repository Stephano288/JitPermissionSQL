using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.IO;
using System.Runtime.CompilerServices;
using Newtonsoft.Json;
using System.Text.Json;
using System.Runtime.InteropServices;
using System.Data;

namespace SQLJITApi
{
    public static class SQLUtil
    {
    

       public static DataTable ScriptExecutor (string FilePath,  string connString , List<SqlParameter> parameters = default)
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
                    if (parameters!=null)
                        {
                        foreach (SqlParameter param in parameters)
                        {
                            cmd.Parameters.AddWithValue(param.ParameterName, param.Value);

                        }
                    }

                    using (SqlDataAdapter ada = new SqlDataAdapter(cmd))
                    {

                       ada.Fill(dt);
                    }
                }
            }



            return dt;

        }
        
    }
}
