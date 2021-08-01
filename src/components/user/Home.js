import React from 'react'
import Navbar from '../layouts/Navbar'
import Carousel from './Carousel'
import Footer from './Footer'
import Product from './Product'
import Trending from './Trending'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Carousel/>
            <Product/>
            <Trending/>
            <Footer/>

        </>
    )
}

export default Home

