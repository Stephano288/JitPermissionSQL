using System.Data.SqlClient;

namespace SQLJITApi
{
    public class CustomSQLConnectionString
    {
        public string DataSource { get; set; }
        public bool IntegratedSecurity { get; set; }
        public string Password { get; set; }
        public string UserID { get; set; }
        public string ConnectionString
        {
            get
            {
                SqlConnectionStringBuilder scb = new SqlConnectionStringBuilder();
                scb.DataSource = DataSource;
                scb.IntegratedSecurity = IntegratedSecurity;
                scb.UserID = UserID;
                scb.Password = Password;
                return scb.ConnectionString;
            }
        }

    }

    public class ConnToken
    {
        public string Token {get; set;}
    }

 
}
