using MongoDB.Bson.Serialization.Attributes;

public class User
{

          [BsonId]
          [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
          public string? Id { get; set; }
          [BsonElement("username")]
          public string? Username { get; set; }
          [BsonElement("email")]
          public string? Email { get; set; }
          [BsonElement("password")]
          public string? Password { get; set; }
          [BsonElement("salt")]
          public string? Salt { get; set; }
}