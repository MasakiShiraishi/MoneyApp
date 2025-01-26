using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

public class JwtTokenGenerator
{
          private readonly IConfiguration _configuration;

          public JwtTokenGenerator(IConfiguration configuration)
          {
                    _configuration = configuration;
          }

          public string GenerateToken(string username)
          {
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var jwtKey = _configuration["JWT_KEY"];
                    var jwtIssuer = _configuration["JWT_ISSUER"];
                    var jwtAudience = _configuration["JWT_AUDIENCE"];

                    if (string.IsNullOrEmpty(jwtKey))
                    {
                              throw new ArgumentNullException("JWT_KEY", "JWT key is not configured.");
                    }

                    var key = Encoding.ASCII.GetBytes(jwtKey);
                    var tokenDescriptor = new SecurityTokenDescriptor
                    {
                              Subject = new ClaimsIdentity(new[]
                              {
                                        new Claim(ClaimTypes.Name, username),

                              }),
                              Expires = DateTime.UtcNow.AddMinutes(15),
                              Issuer = jwtIssuer,
                              Audience = jwtAudience,
                              SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                    };
                    var token = tokenHandler.CreateToken(tokenDescriptor);
                    return tokenHandler.WriteToken(token);
          }
}