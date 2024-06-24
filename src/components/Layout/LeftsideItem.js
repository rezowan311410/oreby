import React, { useState } from 'react'
import {GoPlus } from 'react-icons/go';


function LeftsideItem(props) {
    let [show,setshow] = useState(false)
    let [drop,setdrop] = useState(props.subdropdown)
  return (
    <div>
    {
      drop ?
    <>
      <div onClick={()=>setshow(!show)} className='flex items-center justify-between border-b border-solid
      border-[#F0F0F0] py-5'>
     <h3 className='cursor-pointer font-dm text-base font-normal text-[#767676] '>
     {
        props.color&&
        <span className='inline-block h-[11px] w-[11px] rounded-full mr-2' style={{background:props.color}}></span>
       }
      {props.title}</h3>
      <GoPlus className='text-[#767676]'/>
     </div>
     
    </>
      :
      <div className='flex items-center justify-between border-b border-solid
      border-[#F0F0F0] py-5'>
     <h3 className='cursor-pointer font-dm text-base font-normal text-[#767676] '>
     {
        props.color&&
        <span className='inline-block h-[11px] w-[11px] rounded-full mr-2' style={{background:props.color}}></span>
       }
      {props.title}</h3>
      <GoPlus className='text-[#767676]'/>
     </div>
    }
   {
    show &&(
    <div>
    {props.children}
    
    </div>
    )
   }
   </div>
  )
}

export default LeftsideItem