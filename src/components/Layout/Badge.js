import React from 'react'

function Badge({title}) {
  return (
    <span className='absolute top-5 left-5 font-dm font-bold text-sm inline-block bg-primarycolor text-white px-8 py-2 '>{title}</span>
  )
}

export default Badge