import React from 'react'

function Button({tittle}) {
  return (
  <div>
      <button className='font-dm font-bold text-base text-white bg-primarycolor py-4 px-24 mt-7'>{tittle}</button>
  </div>
  )
}

export default Button