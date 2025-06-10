public class WeatherDetails
{
    public int Id { get; set; }
    public string City { get; set; }
    public float Temperature { get; set; }
    public string Condition { get; set; }
    public DateTime Timestamp { get; set; }

//Empty Constructor
    public WeatherDetails() { }

//Constructor with parameters
    public WeatherDetails(string city, float temperature, string condition)
    {
        City = city;
        Temperature = temperature;
        Condition = condition;
        Timestamp = DateTime.UtcNow;
    }

//Copy Constructor
    public WeatherDetails(WeatherLogs weatherLogs)
    {
        City = weatherLogs.City;
        Temperature = weatherLogs.Temperature;
        Condition = weatherLogs.Condition;
        Timestamp =  weatherLogs.Timestamp;
    }
}