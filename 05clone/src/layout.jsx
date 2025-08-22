import React from "react"
import { Outlet } from 'react-router-dom'
import Header from './components/header/hheader'
import Footer from './components/footer/ffooter'

function Layout() {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout