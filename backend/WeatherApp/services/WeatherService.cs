using WeatherApp.Models;
using System.Text.Json;
namespace WeatherApp.Services
{
    public class WeatherService
    {
        private readonly IConfiguration _config;
        private readonly HttpClient _httpClient;

        // Constructor with config and httpclient parameters
        public WeatherService(IConfiguration config, HttpClient httpClient)
        {
            _config = config;
            _httpClient = httpClient;
        }

        public string GetGeoUrl()
        {
            return _config["OpenMeteo:GeoUrl"];
        }

        public string GetWeatherUrl()
        {
            return _config["OpenMeteo:WeatherUrl"];
        }

        //calling function to get API response
        public async Task<JsonDocument?> GetApiResponseAsync(string url)
        {
            var response = await _httpClient.GetAsync(url);
            if (!response.IsSuccessStatusCode) return null;

            var contentStream = await response.Content.ReadAsStreamAsync();
            return await JsonDocument.ParseAsync(contentStream);
        }


        public async Task<(double, double)?> GetCoordinates(string city)
        {
            var geoUrl = GetGeoUrl() + $"?name={city}&count=1";
            var response = await GetApiResponseAsync(geoUrl);

            if (response == null) return null;

            var lat = response.RootElement.GetProperty("results")[0].GetProperty("latitude").GetDouble();
            var lon = response.RootElement.GetProperty("results")[0].GetProperty("longitude").GetDouble();

            return (lat, lon);
        }

        public async Task<WeatherDetails?> GetWeather(string city)
        {
            var coords = await GetCoordinates(city);
            if (coords == null) return null;

            var (lat, lon) = coords.Value;
            var weatherUrl = GetWeatherUrl() + $"?latitude={lat}&longitude={lon}&current=temperature_2m";
            var response = await GetApiResponseAsync(weatherUrl);
            if (response == null) return null;

            var temp = response.RootElement.GetProperty("current").GetProperty("temperature_2m").GetSingle();
            return new WeatherDetails(city, temp, "Default");
        }
    }
}