import React from 'react'
import Breadcam from '../components/Layout/Breadcam';
import Container from '../components/Layout/Container';
import InputBox from '../components/InputBox';

import Button from '../components/Button';
function Contact() {
  return (
   <>
   <Container>
     <Breadcam  tittle='Product'/>
    <h2 className='font-dm font-bold text-4xl text-[#262626] mb-10'>Fill up a Form</h2>
    <div className='w-2/4'>
    <InputBox as='input' placeholder='Your name here' tittle='Name'/>
    <InputBox as='input' placeholder='Your email here' tittle='Email'/>
    <InputBox as='textarea' placeholder='Your message here' tittle='Message'/>
    <Button tittle='Post'/>
    </div>
   </Container>
   </>
  )
}

export default Contact