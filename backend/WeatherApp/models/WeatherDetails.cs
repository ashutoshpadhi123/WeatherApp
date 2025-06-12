namespace WeatherApp.Models
{
    public class WeatherDetails
    {
        public int Id { get; set; }
        public string City { get; set; } = string.Empty;
        public string Condition { get; set; } = string.Empty;

        public float Temperature { get; set; }
        public float Humidity { get; set; }
        public float FeelsLike { get; set; }
        public float Rain { get; set; }


        public DateTime Timestamp { get; set; }

        //Empty Constructor
        public WeatherDetails() { }

        //Constructor with parameters
        public WeatherDetails(string city, float temperature, string condition, float humidity, float feelsLike, float rain)
        {
            City = city;
            Temperature = temperature;
            Condition = condition;
            Humidity = humidity;
            FeelsLike = feelsLike;
            Rain = rain;
            Timestamp = DateTime.UtcNow;
        }

        //Copy Constructor
        public WeatherDetails(WeatherLogs weatherLogs)
        {
            City = weatherLogs.City;
            Temperature = weatherLogs.Temperature;
            Condition = weatherLogs.Condition;
            Humidity = weatherLogs.Humidity;
            FeelsLike = weatherLogs.FeelsLike;
            Rain = weatherLogs.Rain;
            Timestamp = weatherLogs.Timestamp;
        }
    }
}