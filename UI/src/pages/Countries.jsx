import React from 'react'
import { Link } from 'react-router-dom'

function Countries() {
    return (
        <div className=''>
            <div className='bg-purple-900 h-15 w-screen text-white text-2xl font-extrabold p-4'>
                <span className='flex justify-center'>Countries</span>
            </div>
            <div className='flex justify-center'>
                <label className='text-lg mt-2 flex items-center' for="city">Choose a country:</label><br />
                <select className=' ml-2 mt-2 text-xl border-3 rounded-md h-10 w-60' id='countrylist'>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="America">America</option>
                </select>
                <Link className='inline-block h-10 text-white ml-4 mt-2 p-2 rounded-lg bg-purple-900 hover:bg-gray-700'>
                    Check Weather
                </Link>
            </div>
        </div >
    )
}

export default Countries