import Container from './Container'
import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Breadcam({tittle}) {
   console.log(window.location.pathname)
  return (
    <div className='my-28'>
     <Container>
      <h1 className='font-dm text-primarycolor text-5xl font-bold'>{window.location.pathname.split('/')[1]}</h1>
       <p className='text-[#767676] text-3 font-normal mt-3 flex items-end gap-x-2'>
         <Link to='/'> Home </Link>
       <FaAngleRight/>
       {window.location.pathname.split('/')[1]}
      </p>
     </Container>
    </div>
  )
}

export default Breadcam