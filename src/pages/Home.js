import React from 'react'
import AdditionalInfo from '../components/Layout/AdditionalInfo'
import Advertise from '../components/Layout/Advertise'
import Banner from '../components/Layout/Banner'
import NewArrival from '../components/Layout/NewArrival'
import Bestsellers from '../components/Layout/Bestsellers'
import Advertisement from '../components/Layout/Advertisement'
import Offers from '../components/Layout/Offers'
import Footer from '../components/Layout/Footer'
const Home = () => {
  return (
    <>
     <Banner/>
     <AdditionalInfo/>
     <Advertise/>
     <NewArrival/>
     <Bestsellers/>
     <Advertisement/>
     <Offers/>
    
    </>
  )
  
}

export default Home