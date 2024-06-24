import React from 'react'
import {RxTriangleLeft,RxTriangleRight} from 'react-icons/rx';
function NextArrows(props) {
    const { className, style, onClick } = props;
  return (
    <>
    
      <span
        className='absolute top-[40%] translate-y-[-50%] right-[25px]  z-10 bg-[rgba(0,0,0,.20)]  !flex h-16 w-16 items-center justify-center rounded-full'
        style={{ ...style,
       
       }}
        onClick={onClick}
        
      >
        <RxTriangleRight className='text-white text-2xl'/>
      </span>
      </>
  )
}

export default NextArrows