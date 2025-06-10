var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();

// Register WeatherService with HttpClient + config
builder.Services.AddHttpClient<WeatherService>();

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
