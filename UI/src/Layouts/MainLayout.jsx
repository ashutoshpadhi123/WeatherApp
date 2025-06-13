import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../Components/NavigationBar'
import Banner from '../Components/Banner.jsx'
import Card from '../Components/Card.jsx'

const MainLayout = () => {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}

export default MainLayout