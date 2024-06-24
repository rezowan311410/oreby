
import React, { useState,useEffect } from 'react'
import Container from '../components/Layout/Container';
import Flex from '../components/Layout/Flex';
import Breadcam from '../components/Layout/Breadcam';
import Pagination from '../components/Layout/Pagination';
import ListItem from '../components/Layout/ListItem';
import Leftsidebar from '../components/Layout/Leftsidebar';
import {BsFilterSquareFill} from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai';

function Shope() {
  let[shownumber,setshownumber] = useState(12)
  let[show,setshow] = useState(true)
  let handlenumber = (e)=>{
    setshownumber(+e.target.value)
  }

  useEffect(()=>{
    function scrollwidth (e){
      if(window.innerWidth < 575){
        setshow(false)
      }else{
        setshow(true)
      }
    }
    scrollwidth()
    window.addEventListener("resize",scrollwidth)
  },[])
  return (
  <Container>
   <Breadcam  tittle='Product'/>
      <Flex className='flex gap-x-10'>
      {show && (
        <div className='sm:w-[25%] p-5 w-full sm:bg-transparent  absolute left-0 top-0 z-50 bg-[#fcfcfc] sm:static '>
          <AiFillCloseCircle className='sm:hidden block' onClick={()=>setshow(!show)}/>
          <Leftsidebar/>
        </div>
      )}
        <div className='md:w-[75%] w-full relative'>
        <div className='flex gap-x-10 mb-3.5'>
          <div className='flex sm:hidden block items-center mt-5'>
            <BsFilterSquareFill onClick={()=>setshow(!show)}/>
          </div>
        <div className='md:flex gap-x-3.5 items-center'>
           <ListItem className='list-none  font-dm font-regular text-base text-[#767676]' itemname="Sort by : "/>
           <select  class="bg-gray-50 md:w-[239px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black-500 block w-full p-2.5
           font-dm font-regular text-base text-[#767676]">
            <option selected>Featured</option>
            <option value="US" className=' font-dm font-regular text-base text-[#767676]'>United States</option>
            <option value="CA" className=' font-dm font-regular text-base text-[#767676]'>Canada</option>
            <option value="FR" className=' font-dm font-regular text-base text-[#767676]'>France</option>
            <option value="DE" className=' font-dm font-regular text-base text-[#767676]'>Germany</option>
          </select>
         </div>
         <div className='md:flex gap-x-3.5 items-center'>
           <ListItem className='list-none  font-dm font-regular text-base text-[#767676]' itemname="Show : "/>
           <select  class="bg-gray-50 md:w-[139px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black-500 block w-full p-2.5
           font-dm font-regular text-base text-[#767676]" onChange={handlenumber}>
      
            <option selected value="12" className=' font-dm font-regular text-base text-[#767676]'> 12</option>
            <option value="24" className=' font-dm font-regular text-base text-[#767676]'>24</option>
            <option value="48" className=' font-dm font-regular text-base text-[#767676]'>48</option>
            <option value="60" className=' font-dm font-regular text-base text-[#767676]'>60</option>
          </select>
         </div>
        </div>

          <Pagination itemsPerPage={shownumber}/>
         
        </div>
      </Flex>
  </Container>
  )
}

export default Shope