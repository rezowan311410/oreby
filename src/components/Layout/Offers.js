
import React from 'react'
import Badge from './Badge';
import Container from './Container';
import Flex from './Flex';
import Headline from './Headline';
import Product from './Product';

function Offers() {
  return (
    <div className='md:mt-32 mt-6'>
      <Container>
         <Headline title='Special Offers'/>
         <Flex className='sm:flex sm:max-lg:flex-wrap   md:gap-x-10 justify-between'>
    
            <div className='lg:max-w-[370px] md:max-lg:max-w-[345px] sm:max-w-[310px]'>
                <Product  src="assets/productcap.png" badge={true}/>
            </div>
            <div className='lg:max-w-[370px] md:max-lg:max-w-[345px] sm:max-w-[310px]'>
              <Product  src="assets/productcap.png" badge={false}/>
            </div>
            <div className='lg:max-w-[370px] md:max-lg:max-w-[345px] sm:max-w-[310px]'>
              <Product  src="assets/productcap.png" badge={true}/>
            </div>
            <div className='lg:max-w-[370px] md:max-lg:max-w-[345px] sm:max-w-[310px]'>
              <Product  src="assets/productcap.png" badge={false}/>
            </div>
          
          
         </Flex>
      </Container>
    </div>
  )
}

export default Offers