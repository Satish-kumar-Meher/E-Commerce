import React, { useContext } from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import myContext from '../../context/myContext'

function HomePage() {

  
  return (
    <>
<HeroSection/>
<Category/>
<HomePageProductCard/>
<Track/>
<Testimonial/>

    </>
  )
}

export default HomePage
