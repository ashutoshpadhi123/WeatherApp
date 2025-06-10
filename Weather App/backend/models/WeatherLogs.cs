public class WeatherLogs
{
    public int Id { get; set; }
    public string City { get; set; }
    public float Temperature { get; set; }
    public string Condition { get; set; }
    public DateTime Timestamp { get; set; }

    //Empty Constructor
    public WeatherLogs() { }

   //Constructor with parameters 
    public WeatherLogs(string city, float temperature, string condition)
    {
        City = city;
        Temperature = temperature;
        Condition = condition;
        Timestamp = DateTime.UtcNow;
    }
 
}