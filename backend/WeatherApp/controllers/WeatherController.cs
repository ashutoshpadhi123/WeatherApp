using Microsoft.AspNetCore.Mvc;
using WeatherApp.Services;      // For WeatherService
using WeatherApp.Models;        // For WeatherLogs
namespace WeatherApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly WeatherService _weatherService;

        public WeatherController(WeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        // GET: api/weather/current?city=<city_name>
        [HttpGet("current")]
        public async Task<IActionResult> GetCurrentWeather([FromQuery] string city)
        {
            if (string.IsNullOrEmpty(city)) return BadRequest("City is required.");

            var result = await _weatherService.GetWeather(city);
            if (result == null) return NotFound("Could not fetch weather.");

            return Ok(result);
        }


        // POST: api/weather/log
        [HttpPost("log")]
        public IActionResult LogWeather([FromBody] WeatherLogs weatherData)
        {
            if (weatherData == null) return BadRequest("Invalid weather data.");

            // Later: Save to database
            var log = new WeatherLogs(weatherData.City, weatherData.Temperature, weatherData.Condition, weatherData.Humidity, weatherData.FeelsLike, weatherData.Rain);
            return Ok(new { Message = "Weather log saved (mock).", Data = log });
        }
    }
}