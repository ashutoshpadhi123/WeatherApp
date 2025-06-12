namespace WeatherApp.Models
{
    public class WeatherLogs
    {
        public int Id { get; set; }
        public string City { get; set; }
        public float Temperature { get; set; }
        public float Humidity { get; set; }
        public float FeelsLike { get; set; }
        public string Condition { get; set; }
        public DateTime Timestamp { get; set; }
        public float Rain { get; set; }

        //Empty Constructor
        public WeatherLogs() { }

        //Constructor with parameters 
        public WeatherLogs(string city, float temperature, string condition, float humidity, float feelsLike, float rain)
        {
            City = city;
            Temperature = temperature;
            Condition = condition;
            Humidity = humidity;
            FeelsLike = feelsLike;
            Rain = rain;
            Timestamp = DateTime.UtcNow;
        }

    }
}