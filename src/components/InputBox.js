import React from 'react'

function inputBox(props) {
  return (
    <>
      <div className='mb-6'>
        <h4 className='font-dm text-base font-bold mb-2.5'>{props.tittle}</h4>
        <props.as placeholder={props.placeholder} className='border-b border-solid border-[#f0f0f0] w-full placeholder:font-dm 
        placeholder:text-sm placeholder:font-normal placeholder:text-[#767676] pb-2.5 resize-none outline-0'/>
      </div>
    </>
  )
}

export default inputBox