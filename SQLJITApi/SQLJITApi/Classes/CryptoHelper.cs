using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace SQLJITApi
{
        public class CryptoHelper
        {
        public string Key { get; set; }
        public byte[] IVector { get; set; }

        public CryptoHelper() 
        {

            StringBuilder builder = new StringBuilder();
            Random random = new Random();
            char ch;
            for (int i = 0; i < 32; i++)
            {
                ch = Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65)));
                builder.Append(ch);
            }

            Key = builder.ToString();

            Byte[] bytes = new Byte[16];
            random.NextBytes(bytes);

            IVector = bytes;

        }



        public CryptoHelper(string key, byte[] ivector)
        {
                Key = key;
                IVector = ivector;
        }


        public string Encrypt( string plainText)
        {
            byte[] array;

            using (Aes aes = Aes.Create())
            {
                aes.Key = Encoding.UTF8.GetBytes(this.Key);
                aes.IV = this.IVector;
                ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);
                using MemoryStream memoryStream = new MemoryStream();
                using CryptoStream cryptoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write);
                using (StreamWriter streamWriter = new StreamWriter(cryptoStream))
                {
                    streamWriter.Write(plainText);
                }
                array = memoryStream.ToArray();
            }


            return Convert.ToBase64String(array);
        }



        public string Decrypt(string cipherText)
        {

            byte[] buffer = Convert.FromBase64String(cipherText);

            using Aes aes = Aes.Create();
            aes.Key = Encoding.UTF8.GetBytes(this.Key);
            aes.IV = this.IVector;
            ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);
            using MemoryStream memoryStream = new MemoryStream(buffer);
            using CryptoStream cryptoStream = new CryptoStream(memoryStream, decryptor, CryptoStreamMode.Read);
            using StreamReader streamReader = new StreamReader(cryptoStream);


            return streamReader.ReadToEnd();
        }




        }
}
