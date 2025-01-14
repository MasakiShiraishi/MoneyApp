using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MoneyAppBackend.Models;
using MoneyAppBackend.Repositories;

[Route("api/[controller]")]
[ApiController]
public class TransactionController : ControllerBase
{
          private readonly TransactionRepository _repository;

          public TransactionController(TransactionRepository repository)
          {
                    _repository = repository;
          }

          [HttpGet]
          public async Task<ActionResult<IEnumerable<Transaction>>> GetTransactions()
          {
                    var transactions = await _repository.GetAsync();
                    return Ok(transactions);
          }

          [HttpGet("{id}")]
          public async Task<ActionResult<Transaction>> GetTransaction(string id)
          {
                    var transaction = await _repository.GetAsync(id);

                    if (transaction == null)
                    {
                              return NotFound();
                    }

                    return Ok(transaction);

          }
}