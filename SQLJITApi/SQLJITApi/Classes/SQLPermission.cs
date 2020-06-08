using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;


namespace SQLJITApi.Classes
{
    public class SQLPermission
    {

        public string Role { get; set; }
        public string Login { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }





    }
}
