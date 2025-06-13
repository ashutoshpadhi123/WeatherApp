import React from 'react'
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    let isActive = false;
    const linkClass = ({ isActive }) =>
        isActive
            ? 'bg-black text-white hover:bg-gray-100 hover:text-white rounded-md px-3 py-2'
            : 'text-white hover:bg-gray-900 hover:text-red rounded-md px-3 py-2';
    return (

        <nav className='bg-purple-300 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <span className='flex flex-shrink-0 items-center mr-4' to='/'>

                            <span className='hidden md:block text-black text-2xl font-bold ml-2'>
                                Weather App
                                <img src='src/assets/heavy-rain-clouds.png' alt='logo' className='h-8 w-8 inline-block' />
                            </span>

                        </span>
                        <div className='md:ml-auto'>
                            <div className='flex space-x-2'>
                                <NavLink to='/' className={linkClass}>
                                    Home
                                </NavLink>
                                <NavLink to='/cities' className={linkClass}>
                                    Cities
                                </NavLink>
                                <NavLink to='/countries' className={linkClass}>
                                    Countries
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavigationBar