using System;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;

public class PasswordHasher
{
          public static string HashPassword(string password, string salt)
          {
                    if(string.IsNullOrEmpty(password)|| string.IsNullOrEmpty(salt))
                    {
                              throw new ArgumentNullException("Password or salt cannot be null or empty.");
                    }                   

                    byte[] saltBytes = Encoding.ASCII.GetBytes(salt);
                    byte[] passwordBytes = Encoding.ASCII.GetBytes(password);

                    byte[] saltedPassword = new byte[saltBytes.Length + passwordBytes.Length];
                    Array.Copy(saltBytes, 0, saltedPassword, 0, saltBytes.Length);
                    Array.Copy(passwordBytes, 0, saltedPassword, saltBytes.Length, passwordBytes.Length);

                    using (SHA256 sha256 = SHA256.Create())
                    {
                              byte[] hashedBytes = sha256.ComputeHash(saltedPassword);
                              return Convert.ToBase64String(hashedBytes);
                    }
          }

          public static bool VerifyPassword(string password, string salt, string hashedPassword)
          {
                    if(string.IsNullOrEmpty(password)|| string.IsNullOrEmpty(salt) || string.IsNullOrEmpty(hashedPassword))
                    {
                              throw new ArgumentNullException("Password, salt or hashedPassword cannot be null or empty.");
                    }                    
                    
                    return HashPassword(password, salt) == hashedPassword;
          }

          public static string GenerateSalt()
          {
                    byte[] salt = new byte[16];
                    using (var rng = RandomNumberGenerator.Create())
                    {
                              rng.GetBytes(salt);
                    }
                    return Convert.ToBase64String(salt);
          }
}