namespace WeatherApp.Models
{
    public class WeatherDetails
    {
        public int Id { get; set; }
        public string City { get; set; } = string.Empty;
        public string Condition { get; set; } = string.Empty;

        public float Temperature { get; set; }
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
            Timestamp = weatherLogs.Timestamp;
        }
    }
}