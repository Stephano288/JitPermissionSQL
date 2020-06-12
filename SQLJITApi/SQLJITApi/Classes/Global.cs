using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SQLJITApi
{
  
    public static class Global
    {

        public static CryptoHelper Crypto { get; set; }


        static Global()
        {
            Crypto = new CryptoHelper();
        }

    }
    
}
