using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;


namespace SQLJITApi.Classes
{
    public class SQLPermission
    {
        public List<string> logins { get; set;  }
        public List<string> roles{ get; set; }

    }
}
