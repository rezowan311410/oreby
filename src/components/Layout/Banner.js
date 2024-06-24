import React, { useState } from 'react';
import Image from './Image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  let [dotActive,setDotActive] = useState(0)
    const settings = {
        dots: true,
        beforeChange: (prev, next) => {
          setDotActive(next);
        },
        arrows:false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
               position:'absolute',
               left:"8%",
               top:"50%",
               transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style={
              i === dotActive ? { 
            width: "30px",
            color: "#262626",
            borderRight: "3px #262626 solid",
            padding: "10px 0"}:{
            width: "30px",
            color: "#262626",
            borderRight: "3px #ffffff solid",
            padding: "10px 0",
            color: "transparent"
          }}
            >
              0{i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 576,
              settings: {
                dots: true,
                appendDots: dots => (
                  <div
                    style={{
                     position:'absolute',
                     left:"2%",
                     top:"50%",
                     transform: "translateY(-50%)",
                    }}
                  >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                  </div>
                ),
                customPaging: i => (
                  <div
                  style={
                    i === dotActive ? { 
                  width: "30px",
                  color: "#262626",
                  borderRight: "3px #262626 solid",
                  fontSize:"12px",
                 }:{
                  width: "30px",
                  color: "#262626",
                  borderRight: "3px #ffffff solid",
                  fontSize:"12px",    
                  color: "transparent"
                }}
                  >
                    0{i + 1}
                  </div>
                ),
              }
            },
          ]
      };
  return (
   
    <Slider {...settings}>
      <div className=''>
        <Image imgsrc="assets/Banner.png" />
      </div>
      <div className=''>
        <Image imgsrc="assets/Banner.png" />
      </div>
      <div className=''>
        <Image imgsrc="assets/Banner.png" />
      </div>
      
    </Slider>
  
  )
}

export default Banner