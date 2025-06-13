import { Link } from 'react-router-dom';
import WeatherResult from './WeatherResult';
import React, { useRef, useState } from 'react';



const Card = ({ children, bg = 'bg-gray-100' }) => {
    const cityInput = useRef();
    const [city, setCity] = useState('');
    const [show, setShow] = useState(false)
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        const enteredCity = document.getElementById('city-input').value;
        if (enteredCity === "") { alert("Please enter a city name!"); return }
        console.log("City entered:", enteredCity);
        setLoading(true);
        setCity(enteredCity);
        setShow(false);
        try {
            const response = await fetch(`/api/weather/current?city=${enteredCity}`);
            const data = await response.json();
            setWeather(data);
            console.log("Weather data:", data);
        } catch (error) {
            console.error("Error fetching weather:", error);
        } finally {
            setLoading(false);
            setShow(true);
        }

    };

    return (
        <div className={`${bg} p-1 rounded-lg shadow-md`}>
            <h2 className=' mb-2 ml-110 text-xl font-bold'> Enter your location to get the current weather conditions.</h2>
            <input type='text' ceholder='Enter your city' id='city-input' className='p-2 border border-gray-300 w-100 rounded-lg ml-110 mb-4'></input>
            <Link
                to=''
                className='inline-block bg-black text-white ml-4 rounded-lg px-2 py-2 bg-purple-900 hover:bg-gray-700'
                onClick={() => {
                    handleClick();
                }}
                state={{ city: cityInput }}
                title='Check Weather'
            >
                Check Weather
            </Link>
            <br />

            {loading && (
                <div className="mt-4 flex items-center gap-2 text-blue-500">
                    <svg className="animate-spin h-5 w-5 text-blue-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <span>Loading weather data...</span>
                </div>
            )}
            {show && weather && !loading && (
                <WeatherResult
                    city={weather.city}
                    temperature={weather.temperature}
                    humidity={weather.humidity}
                    feelsLike={weather.feelsLike}
                    rain={weather.rain}
                    time={weather.timestamp.substring(0, 10)}
                />)}

        </div >)
};
export default Card;