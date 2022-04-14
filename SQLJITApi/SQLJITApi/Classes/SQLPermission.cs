using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Identity;
using Microsoft.VisualBasic;

namespace SQLJITApi.Classes
{
    public class SQLPermission
    {
        public List<string> Logins { get; set; }
        public List<string> Roles { get; set; }

    }


    public class SQLPostJIT
    {

        public string Login { get; set; }
        public string Role { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

    }
   
}





