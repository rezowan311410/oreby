
import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container';
import Image from './Image';
function Advertisement() {
  return (
    <div className='md:mt-32'>
       <Container>
        <Link to="">
          <Image imgsrc="assets/advertisement.png"/> 
        </Link>
       </Container>
    </div>
  )
}

export default Advertisement