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

        public JITDateTime StartDate { get; set; }

        public JITDateTime EndDate { get; set; }

    }

    public class JITDateTime
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }

        public DateTime ToDateTime()
        {
            DateTime _date = new DateTime(Year ,  Month ,  Day);
            return _date;
        }
    }



}





