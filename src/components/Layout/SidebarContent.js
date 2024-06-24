import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import LeftsideItem from './LeftsideItem';

function SidebarContent({subdropdown,droptitle,dropdown,data}) {
  let [show,setshow] = useState(dropdown)
  let [drop,setdrop] = useState(dropdown)
  return (
   <div className='mb-14'> 
    {
      drop ?
      <div onClick={()=>setshow(!show)} className='flex items-center justify-between'>
     <h3 className='cursor-pointer font-bold font-dm text-xl mb-9'>{droptitle}</h3>
      <AiFillCaretDown/>
     </div>
      :
    <h3 className='cursor-pointer font-bold font-dm text-xl  mb-9'>{droptitle}</h3>
    }
   {
    show &&(
      <>
         {
         data.map((item,index)=>(
          item.subCategory?
          (
            <>
            <LeftsideItem subdropdown={item.subCategory ? true: false} title={item.name}>
        {item.subCategory&&
        item.subCategory.map((sitem)=>(
          <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
           border-[#F0F0F0] py-5'>{sitem.name}</h1>
        ))
       }
       </LeftsideItem>
            </>
          ):(
      <LeftsideItem subdropdown={item.subCategory ? true: false} title={item.name}
        color={item.code}
      >
       {item.subCategory&&
        item.subCategory.map((sitem)=>(
          <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
           border-[#F0F0F0] py-5'>{sitem.name}
           
           </h1>
        ))
       }
    </LeftsideItem>
          )
    ))
   }
    {/* <LeftsideItem subdropdown={true} title="Category 1" color="blue"> 
      <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
      border-[#F0F0F0] py-5'>eeeee</h1>
    </LeftsideItem>
    <LeftsideItem subdropdown={true} title="Category 1" color="green">
      <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
      border-[#F0F0F0] py-5'>eeeee</h1>
    </LeftsideItem>
    <LeftsideItem subdropdown={true} title="Category 1" color="yellow">
      <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
      border-[#F0F0F0] py-5'>eeeee</h1>
    </LeftsideItem>
    <LeftsideItem subdropdown={true} title="Category 1" color="red">
      <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
      border-[#F0F0F0] py-5'>eeeee</h1>
    </LeftsideItem> */}
    </>
    )
   }
   {
    !drop &&(
      <>
         {
         data.map((item,index)=>(
          item.subCategory?
          (
            <>
            <LeftsideItem subdropdown={item.subCategory ? true: false} title={item.name}>
        {item.subCategory&&
        item.subCategory.map((sitem)=>(
          <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
           border-[#F0F0F0] py-5'>{sitem.name}</h1>
        ))
       }
       </LeftsideItem>
            </>
          ):(
      <LeftsideItem subdropdown={item.subCategory ? true: false} title={item.name}
        color={item.code}
      >
       {item.subCategory&&
        item.subCategory.map((sitem)=>(
          <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
           border-[#F0F0F0] py-5'>{sitem.name}
           
           </h1>
        ))
       }
    </LeftsideItem>
          )
    ))
   }
      {/* <LeftsideItem subdropdown={true} title="Category 2" color="red">
        <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
      border-[#F0F0F0] py-5'>eeeee</h1>
      </LeftsideItem>
      <LeftsideItem subdropdown={true} title="Category 3" color="red">
        <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
      border-[#F0F0F0] py-5'>eeeee</h1>
      </LeftsideItem>
      <LeftsideItem subdropdown={true} title="Category 4" color="red">
        <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
      border-[#F0F0F0] py-5'>eeeee</h1>
      </LeftsideItem>
      <LeftsideItem subdropdown={true} title="Category 5" color="red">
        <h1 className='cursor-pointer font-dm text-base font-normal text-[#767676]  border-b border-solid
      border-[#F0F0F0] py-5'>eeeee</h1>
      </LeftsideItem> */}
      </>
    )
   }
   </div>
  )
}

export default SidebarContent