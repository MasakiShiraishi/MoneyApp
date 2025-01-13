using MoneyAppBackend.Models;
using MongoDB.Driver;

namespace MoneyAppBackend.Repositories
{

  public class TransactionRepository
  {
    private readonly IMongoCollection<Transaction> _transactions;

    public TransactionRepository(IMongoDatabase database)
    {
      _transactions = database.GetCollection<Transaction>("transactions");
    }

    public async Task<List<Transaction>> GetAsync() =>
      await _transactions.Find(_ => true).ToListAsync();

    public async Task<Transaction> GetAsync(string id) =>
       await _transactions.Find(x => x.Id == id).FirstOrDefaultAsync();
  }
}