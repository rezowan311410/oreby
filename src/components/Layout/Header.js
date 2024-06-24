
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Dropdown from './Dropdown'
import Flex from './Flex';
import { FaBars,FaUserAlt} from 'react-icons/fa';
import {BiSearchAlt2 } from 'react-icons/bi';
import {RxTriangleDown } from 'react-icons/rx';
import {HiShoppingCart } from 'react-icons/hi';
import {ImCross } from 'react-icons/im';
import List from './List';
import ListItem from './ListItem';
import Search from './Search';
import Image from './Image';
import { Link } from 'react-router-dom';
const Header = () => {
  let Categoryref = useRef();
  let Userref = useRef();
  let cartref = useRef();
  let [CategoryDropDown,setCategoryDropDown ] = useState(false)
  let [UserDropDownref,setUserDropDownref] = useState(false)
  let [cartDropDownref,setcartDropDownref] = useState(false)
  useEffect(()=>{
     document.body.addEventListener('click',(e)=>{
      if(Categoryref.current.contains(e.target)){
        setCategoryDropDown (true)
      }else{
        setCategoryDropDown (false)
      }
      if(Userref.current.contains(e.target)){
        setUserDropDownref(true)
      }else{
        setUserDropDownref(false)
      }
      if(cartref.current.contains(e.target)){
        setcartDropDownref(true)
      }else{
        setcartDropDownref(false)
      }
     })
  },[])

  return (
   <>
    <div className='bg-[#F3F3F3] py-6'>
    <Container>
      <Flex className='flex justify-between relative'>
         <div className='flex items-center'>
         <Dropdown dropref={Categoryref}>
           <p className='flex items-center cursor-pointer  font-dm font-regular gap-x-2.5'><FaBars/><span className='hidden lg:inline-block'>
              Shop by Category
            </span>
            </p>  
          {CategoryDropDown &&
            <List className='absolute w-[263px] bg-primarycolor text-[#767676] top-10 cursor-pointer
            font-dm font-regular text-sm z-10'>
            <ListItem className='py-5 px-4   hover:text-white border-b border-solid  border-[#2D2D2D] hover:px-6 ease-in duration-100 hover:font-bold' itemname="Accesories"/>
            <ListItem className='py-5 px-4  hover:text-white hover:font-bold border-b border-solid  border-[#2D2D2D] hover:px-6 ease-in duration-100' itemname="Furniture"/>
            <ListItem className='py-5 px-4  hover:text-white hover:font-bold border-b border-solid  border-[#2D2D2D] hover:px-6 ease-in duration-100' itemname="Electronics"/>
            <ListItem className='py-5 px-4  hover:text-white hover:font-bold border-b border-solid border-[#2D2D2D] hover:px-6 ease-in duration-100' itemname="Clothes"/>
            <ListItem className='py-5 px-4  hover:text-white hover:font-bold border-b border-solid  border-[#2D2D2D] hover:px-6 ease-in duration-100' itemname="Bags"/>
            <ListItem className='py-5 px-4  hover:text-white hover:font-bold border-b border-solid  border-[#2D2D2D] hover:px-6 ease-in duration-100' itemname="Home appliances"/>
           </List>  
          }
         </Dropdown>
         </div>
         <div className='lg:w-[600px] w-auto  relative'>
          <Search className='w-full py-4 px-5 font-dm font-regular text-sm' placeholder='Search Products'/>
          <BiSearchAlt2 className=" absolute top-5 right-4 "/>
         </div>
         <div className='flex items-center'>
          <Flex className='flex gap-x-10  justify-between'>
            <Dropdown className='relative z-10' dropref={Userref}>
            <div className='flex items-center cursor-pointer'>
            <FaUserAlt/>
            <RxTriangleDown/>
            </div>
                  {UserDropDownref &&
                  <List className='absolute w-[200px] bg-white right-0  top-10 cursor-pointer text-center text-primarycolor
                  font-dm font-regular text-sm'>
                  <ListItem className='py-5  hover:bg-primarycolor  hover:text-white border-b border-solid  border-[#F0F0F0] hover:px-6 ease-in duration-100 hover:font-bold' itemname="My Account"/>
                  <ListItem className='py-5  hover:bg-primarycolor  hover:text-white hover:font-bold border-b border-solid  border-[#F0F0F0] hover:px-6 ease-in duration-100' itemname="Log Out"/>
                </List>  
                }
            </Dropdown>
       
          <div>
            
            <Dropdown className='relative z-10' dropref={cartref}>
            <div className='flex items-center'>
            <HiShoppingCart className='text-2xl cursor-pointer'/>
            </div>
                  {cartDropDownref &&
                <div className='absolute w-[360px] right-0  top-10 border border-solid  border-[#F0F0F0]'>
                   <div className=' bg-[#F5F5F5] p-5'>
                   <Flex className='flex justify-between'>
                     <div>
                       <Image imgsrc='assets/cartdropdownimg.png'/>
                     </div>
                     <div className='flex justify-center flex-col'>
                      <h3 className='font-dm text-sm font-bold text-primarycolor'>
                         Black Smart Watch
                      </h3>
                      <p className='font-dm text-sm font-bold text-primarycolor mt-3'>
                         $44.00
                      </p>
                     </div>
                     <div className='flex justify-end items-center text-primarycolor font-light text-sm'>
                       <ImCross className='cursor-pointer'/>
                     </div>
                   </Flex>
                 </div>
                 <div className='bg-[#ffffff] p-5'>
                  <h4 className='font-normal font-dm text-base text-[#767676]'>Subtotal:
                     <span className='text-primarycolor'>$44.00</span>
                  </h4>
                  <Link to="#" className='font-bold font-dm text-sm py-4 px-10 border border-solid border-[#2B2B2B] inline-block mt-3
                   hover:bg-primarycolor hover:text-[#FFFFFF] ease-in duration-100'>
                     View Cart
                  </Link>
                  <Link to="#" className='font-bold font-dm text-sm py-4 px-10 border border-solid border-[#2B2B2B] inline-block mt-3 ml-5 hover:bg-primarycolor hover:text-[#FFFFFF] ease-in duration-100'>
                    Checkout
                  </Link>
                 </div>
                </div>
                }
            </Dropdown>
          </div>
          </Flex>
         </div>
         
      </Flex>
    </Container>
    </div>
        
   </>
  )
}

export default Header