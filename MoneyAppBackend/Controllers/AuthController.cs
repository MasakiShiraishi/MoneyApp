using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MoneyAppBackend.Models;
using MoneyAppBackend.Repositories;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
          private readonly AuthRepository _authrepository;
          private readonly JwtTokenGenerator _jwtTokenGenerator;
          private readonly PasswordHasher _passwordHasher;

          public AuthController(AuthRepository authrepository, JwtTokenGenerator jwtTokenGenerator, PasswordHasher passwordHasher)
          {
                    _authrepository = authrepository;
                    _jwtTokenGenerator = jwtTokenGenerator;
                    _passwordHasher = passwordHasher;
          }




          [HttpGet]
          public async Task<ActionResult<IEnumerable<User>>> Get()
          {
                    var users = await _authrepository.GetUsersAsync();
                    return Ok(users);
          }

          [HttpPost("login")]
          public async Task<ActionResult<User>> Login([FromBody] User user)
          {
                    if (string.IsNullOrEmpty(user.Username) || string.IsNullOrEmpty(user.Password))
                    {
                              return BadRequest("Username or password cannot be null or empty.");
                    }

                    var foundUser = await _authrepository.GetAsync(user.Username);

                    if (foundUser == null || foundUser.Salt == null || foundUser.Password == null || !PasswordHasher.VerifyPassword(user.Password, foundUser.Salt, foundUser.Password))
                    {
                              return Unauthorized();
                    }
                    var token = _jwtTokenGenerator.GenerateToken(user.Username);
                    return Ok(token);
          }

          [HttpPost("register")]
          public async Task<ActionResult<User>> Register([FromBody] User user)
          {
                    if (string.IsNullOrEmpty(user.Username) || string.IsNullOrEmpty(user.Password) || string.IsNullOrEmpty(user.Email))
                    {
                              return BadRequest("Username, password or email cannot be null or empty.");
                    }
                    user.Salt = PasswordHasher.GenerateSalt();
                    user.Password = PasswordHasher.HashPassword(user.Password, user.Salt);

                    var createdUser = await _authrepository.CreateAsync(user);
                    return Ok(createdUser);


          }
}