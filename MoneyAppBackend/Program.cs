using DotNetEnv;
using MoneyAppBackend.Models;
using MongoDB.Driver;
using MoneyAppBackend.Repositories;

var builder = WebApplication.CreateBuilder(args);
Env.Load();


var mongoSettings = new MongoDBSettings
{
    ConnectionString = Environment.GetEnvironmentVariable("MONGODB_CONNECTION_STRING"),
    DatabaseName = Environment.GetEnvironmentVariable("MONGODB_DATABASE_NAME")
};

builder.Services.Configure<MongoDBSettings>(options =>
{
    options.ConnectionString = mongoSettings.ConnectionString;
    options.DatabaseName = mongoSettings.DatabaseName;
});

builder.Services.AddSingleton<IMongoClient, MongoClient>(sp =>
new MongoClient(mongoSettings.ConnectionString));

builder.Services.AddSingleton(sp =>
sp.GetRequiredService<IMongoClient>().GetDatabase(mongoSettings.DatabaseName));

builder.Services.AddTransient<TransactionRepository>();


// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();