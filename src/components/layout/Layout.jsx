import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import ScrollTop from "../scrollTop/ScrollTop"
// import HeroSection from "../heroSection/HeroSection"
// import Category from "../category/Category"

export const Layout = () => {
    return ( 
    <>
    <Navbar/>
    {/* <HeroSection/>
    <Category/> */}
    <ScrollTop/>
    <Outlet/>
    <Footer/>
    </>
    )
}