import React from 'react'
import Image from './Image';
import Badge from './Badge';
import Flex from './Flex';
import {BsFillSuitHeartFill,BsFillCartFill} from 'react-icons/bs';
import {AiOutlineReload} from 'react-icons/ai';
function Product({src,badge}) {
  return (
   <div>
    <div className='relative group overflow-y-hidden'>
        <Image className="w-full" imgsrc={src}/>
        {badge&&
          <Badge title='New'/>
        }
       <div className='bg-white group-hover:bottom-0 ease-in duration-300    h-40 absolute left-0 bottom-[-57%] lg:max-xl:bottom-[-75%] w-full  py-6 px-8    '>
         <Flex className='flex items-center gap-x-4 justify-end group'>
         <p className='font-dm font-normal text-[#6d6d6d] text-base'>Add to Wish List</p>
             <BsFillSuitHeartFill className='text-2xl text-primarycolor'/>
           
          </Flex>
         <Flex className='flex items-center gap-x-4 justify-end py-5'>
         <p className='font-dm font-normal text-[#6d6d6d] text-base'>Compare</p>
             <AiOutlineReload className='text-2xl text-primarycolor'/>
           
          </Flex>
         <Flex className='flex items-center gap-x-4 justify-end'>
         <p className='font-dm font-normal text-[#6d6d6d] text-base'>Add to Cart</p>
             <BsFillCartFill className='text-2xl text-primarycolor'/>
           
          </Flex>
        </div> 
    </div>
    <div className='mt-2 md:mt-4 mb-12 md:mb-0'>
      <Flex className="flex items-center justify-between">
         <h3 className='text-primarycolor font-bold sm:text-xl lg:max-xl:text-sm'>Basic Crew Neck Tee</h3>
         <p className='text-[#767676] font-normal text-base '>$44.00</p>
      </Flex>
      <p className='text-[#767676] font-normal text-base mt-1 md:mt-1 md:mb-4  lg:mt-2'>Black</p>
    </div>
   </div>
  )
}

export default Product