
import React from 'react'
import Badge from './Badge';
import Container from './Container';
import Flex from './Flex';
import Headline from './Headline';
import Product from './Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrows from './NextArrows';

import SamplePrevArro from './SamplePrevArro';




function NewArrival() {

  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrows/>,
      prevArrow: <SamplePrevArro/>,
     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            dots: false,
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
     
    };
  return (
    <div className='md:mt-32 mt-6'>
      <Container>
         <Headline title='New Arrivals'/>
         {/* <Flex className='sm:flex sm:max-lg:flex-wrap   md:gap-x-10 justify-between'> */}
         <Slider {...settings}>
            <div className='lg:max-w-[370px] md:max-lg:max-w-[345px] sm:max-w-[310px]'>
                <Product  src="assets/productcap.png" badge={true}/>
            </div>
            <div className='lg:max-w-[370px] md:max-lg:max-w-[345px] sm:max-w-[310px]'>
              <Product  src="assets/productcap.png" badge={false}/>
            </div>
            <div className='lg:max-w-[370px] md:max-lg:max-w-[345px] sm:max-w-[310px]'>
              <Product  src="assets/productcap.png" badge={true}/>
            </div>
            <div className='lg:max-w-[370px] md:max-lg:max-w-[345px] sm:max-w-[310px]'>
              <Product  src="assets/productcap.png" badge={false}/>
            </div>
            <div className='lg:max-w-[370px] md:max-lg:max-w-[345px] sm:max-w-[310px]'>
              <Product  src="assets/productcap.png" badge={false}/>
            </div>
            </Slider>
         {/* </Flex> */}
      </Container>
    </div>
  )
}

export default NewArrival