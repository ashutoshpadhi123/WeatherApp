import React from 'react'

const WeatherResult = ({ city, temperature, humidity, feelsLike, rain, time }) => {

    return (
        <div className="items-center" style={{}}>
            <div className={`p-5 inline-block rounded-lg shadow-md mt-1 mb-2 inline-block rounded-lg shadow-md`} >
                <div className={`ml-70 `}>
                    <div className='bg-purple-100 inline-block justify-center rounded-full mb-1 ml-4 border-2 w-100 p-2' >
                        <span className='text-lg font-bold mt-2 mb-4 justify-center'>City:</span>
                        <span className='mt-2 text-black-500 justify-center'> {city}</span>
                    </div>
                    <section className='bg-purple-100 inline-block rounded-full justify-end items-center mb-1 ml-4 border-2 w-100 p-2'>
                        <span className='text-lg font-bold mt-2 mb-4'>Date:</span>
                        <span className='mt-2 text-black-500'> {time}</span>
                    </section>
                    <section className='bg-purple-100 inline-block rounded-full  items-center mb-1 ml-4 border-2 w-100 p-2'>
                        <span className='text-lg font-bold mt-2 mb-4'>Temprature:</span>
                        <span className='mt-2 text-black-500'> {temperature} °C</span>
                    </section>
                    <section className='bg-purple-100 inline-block rounded-full items-center mb-1 ml-4 border-2 w-100 p-2'>
                        <span className=' text-lg font-bold mt-2 mb-4'>Feels like:</span>
                        <span className='mt-2 text-black-500'> {feelsLike} °C</span>
                    </section>
                    <section className='bg-purple-100 inline-block rounded-full items-center mb-1 ml-4 border-2 w-100 p-2'>
                        <span className='text-lg font-bold mt-2 mb-4'>Humidity:</span>
                        <span className='mt-2 text-black-500'> {humidity}</span>
                    </section>
                    <section className='bg-purple-100 inline-block rounded-full justify-end items-center mb-1 ml-4 border-2 w-100 p-2'>
                        <span className='text-lg font-bold mt-2 mb-4'>Rain:</span>
                        <span className='mt-2 text-black-500'> {rain}</span>
                    </section>
                </div>
            </div >

            <div className="bg-cover bg-center h-screen flex items-center justify-center text-black bg-black bg-opacity-50"
                style={{ backgroundImage: "url('/src/assets/background.jpg')" }}>
                <div className='h-50 w-50 mt-1'>
                    <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </div>
            </div>
        </div >

    );
};

export default WeatherResult