import React from 'react'
import {RxTriangleLeft} from 'react-icons/rx';
function SamplePrevArro(props) {
    const { className, style, onClick } = props;
  return (
    <>
    
      <span
        className='absolute top-[40%] translate-y-[-50%] left-0 z-10 bg-[rgba(0,0,0,.20)]  !flex h-16 w-16 items-center justify-center rounded-full'
        style={{ ...style,
       
       }}
        onClick={onClick}
        
      >
        <RxTriangleLeft className='text-white text-2xl'/>
      </span>
      </>
  )
}

export default SamplePrevArro