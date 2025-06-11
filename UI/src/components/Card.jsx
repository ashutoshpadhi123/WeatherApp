import { Link } from 'react-router-dom';
import WeatherResult from './WeatherResult';
import React, { useRef, useState } from 'react';



const Card = ({ children, bg = 'bg-gray-100' }) => {

    //let cityInput = "Delhi";
    const cityInput = useRef();
    const [city, setCity] = useState('');
    const [show, setShow] = useState(false)

    const handleClick = () => {

        const enteredCity = document.getElementById('city-input').value;
        if (enteredCity === "") { alert("Please enter a city name!"); return }
        console.log("City entered:", enteredCity);
        setCity(enteredCity);
        setShow(true);

    };

    return (<div className={`${bg} p-6 rounded-lg shadow-md`}>

        <h2 className='text-2xl font-bold'></h2>
        <p className='mt-2 mb-4'>
            Enter your location to get the current weather conditions and forecast.
        </p>
        <input
            type='text'
            placeholder='Enter your city'
            id='city-input'
            className='w-full p-2 border border-gray-300 rounded-lg mb-4'
        ></input>
        <Link
            to=''
            className='inline-block bg-black text-white rounded-lg px-2 py-2 hover:bg-gray-700'
            onClick={() => {
                handleClick();
            }}
            state={{ city: cityInput }}
            title='Check Weather'
        >
            Check Weather
        </Link>
        <br />
        {show && <WeatherResult city={city} />}

    </div >)
};
export default Card;