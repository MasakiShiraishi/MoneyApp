using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MoneyAppBackend.Models
{
          public class Transaction
          {
                    [BsonId]
                    [BsonRepresentation(BsonType.ObjectId)]
                    public string? Id { get; set; }

                    [BsonElement("date")]
                    public DateTime Date { get; set; }

                    [BsonElement("category")]
                    public string? Category { get; set; }

                    [BsonElement("name")]
                    public string? Name { get; set; }

                    [BsonElement("amount")]
                    public int? Amount { get; set; }

                    [BsonElement("payment")]
                    public string? Payment { get; set; }

          }
}