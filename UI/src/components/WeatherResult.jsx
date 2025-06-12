import React from 'react'

const WeatherResult = ({ city }) => {
    console.log(`WeatherResult component received cityInput:` + { city });
    return (
        <div className={` p-6 rounded-lg shadow-md`}>
            <h2 className='text-2xl font-bold'></h2>
            <span className='mt-2 mb-4'> The weather is searched for the city: {city}</span><br />
            <span className='mt-2 mb-4'> The temprature of the city: 28 *C</span>
        </div >)

}

export default WeatherResult