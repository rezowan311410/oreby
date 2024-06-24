import React from 'react'
import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from "react";
const Navbar = () => {
    let[show,setshow] = useState(true)

  useEffect(()=>{
    function scrollwidth (e){
      if(window.innerWidth < 1024){
        setshow(false)
      }else{
        setshow(true)
      }
    }
    scrollwidth()
    window.addEventListener("resize",scrollwidth)
  },[])
  return (
    <>
      <nav className='py-8'>
      <div className="p-2.5 max-w-container mx-auto">
     
        <Flex className='lg:flex'>
   
        <div className="w-1/4">
            <Image imgsrc="assets/logo.png"/>
        </div>
       
       <div className="lg:w-3/4">
       <FaBars onClick={()=>setshow(!show)} className="block lg:hidden ml-auto absolute top-2.5 right-2.5"/>
       {show && (
        <List className='lg:flex lg:justify-end lg:gap-x-10 font-dm cursor-pointer mt-5 lg:mt-0  text-sm'>
          <ListItem className="font-bold hover:font-bold my-2.5 lg:my-0" itemname='Home' />
          <ListItem className="font-normal hover:font-bold my-2.5 lg:my-0" itemname='About' />
          <ListItem className="font-normal hover:font-bold my-2.5 lg:my-0" itemname='Service'/>
          <ListItem className="font-normal hover:font-bold my-2.5 lg:my-0" itemname='Contact'/>
        </List>
        )}
       </div>
      
      </Flex>
       
      </div>
      </nav>
    
    </>
  )
}

export default Navbar