using MongoDB.Driver;

public class AuthRepository
{
    private readonly IMongoCollection<User> _users;

    public AuthRepository(IMongoDatabase database)
    {
        _users = database.GetCollection<User>("users");
    }

    public async Task<User> GetAsync(string username) =>
        await _users.Find(x => x.Username == username).FirstOrDefaultAsync();

    public async Task<User> CreateAsync(User user)
    {
        await _users.InsertOneAsync(user);
        return user;
    }

    public async Task<IEnumerable<User>> GetUsersAsync()
    {
        return await _users.Find(_ => true).ToListAsync();
    }
}
