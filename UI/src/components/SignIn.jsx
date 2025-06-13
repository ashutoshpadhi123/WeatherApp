import React from 'react'
import { useState } from 'react';
import NavigationBar from './NavigationBar';
import Banner from './Banner.jsx'
import Card from './Card.jsx'
const SignIn = () => {

    const [showComponent, setShowComponent] = useState(false);
    const [loading, setLoading] = useState(false);
    const onSignInClick = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowComponent(true);
        }, 2000);

    }

    if (showComponent) {
        return (
            <>

            </>

        )
    }
    return (
        <div>
            {loading ? (
                <div className="h-screen flex items-center justify-center bg-black bg-opacity-80">
                    <div className="text-white flex items-center gap-2">
                        <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        <span>Loading weather data...</span>
                    </div>
                </div>
            ) : showComponent ? (
                // Final loaded components
                <>
                    <NavigationBar />
                    <Banner />
                    <Card />
                </>
            ) : (
                // Sign In form
                <div className="bg-cover bg-center h-screen flex items-center justify-center text-black bg-black bg-opacity-80">
                    <div className='h-50 w-50 mt-1'>
                        <p className='text-white text-lg font-bold'>
                            Welcome to the Weather App! Please log in to continue.
                        </p>
                        <form className='mt-4'>
                            <input type='text' placeholder='Username' className='w-full p-2 mb-2 bg-yellow-100  rounded-lg' />
                            <input type='password' placeholder='Password' className='w-full p-2 mb-4 bg-yellow-100 border rounded-lg' />
                            <button
                                type='button'
                                className='bg-purple-900 text-white rounded-lg px-4 py-2 hover:bg-gray-500 w-full'
                                onClick={onSignInClick}
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );


}

export default SignIn