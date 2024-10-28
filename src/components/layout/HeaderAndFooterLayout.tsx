import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../UI/Header/Header'
import Footer from '../UI/Footer/Footer'
const HeaderAndFooterLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default HeaderAndFooterLayout
