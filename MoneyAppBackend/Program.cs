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
builder.Services.AddTransient<AuthRepository>();
builder.Services.AddTransient<JwtTokenGenerator>();
builder.Services.AddTransient<PasswordHasher>();

// smtp settings
var smtpServer = Environment.GetEnvironmentVariable("SMTP_SERVER") ?? throw new ArgumentNullException("SMTP_SERVER environment variable is not set.");
var smtpPortString = Environment.GetEnvironmentVariable("SMTP_PORT") ?? throw new ArgumentNullException("SMTP_PORT environment variable is not set.");
var smtpPort = int.Parse(smtpPortString);
var smtpUsername = Environment.GetEnvironmentVariable("SMTP_USERNAME") ?? throw new ArgumentNullException("SMTP_USERNAME environment variable is not set.");
var smtpPassword = Environment.GetEnvironmentVariable("SMTP_PASSWORD") ?? throw new ArgumentNullException("SMTP_PASSWORD environment variable is not set.");

builder.Services.AddSingleton(new EmailService(smtpServer, smtpPort, smtpUsername, smtpPassword));

// CORS settings
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

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

// app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors("AllowAll");
app.MapControllers();

app.Run();