import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';

function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
           
             <div className='lg:w-[32%] md:w-[49%]'>
            
              <h3><Product  src="assets/productcap.png" badge={true}/></h3>
         
           </div>
          ))}
      </>
    );
  }

function Pagination({ itemsPerPage }) {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
         13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
         13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
         13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
         13, 14,];

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
    <div className='md:flex md:flex-wrap md:justify-between'>
    <Items currentItems={currentItems} />
    </div>
    <ReactPaginate
      breakLabel="..."
      nextLabel=""
      nextClassName="hidden"
      previousClassName="hidden"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel=""
      renderOnZeroPageCount={null}
      pageClassName="page-item border border-solid border-[#F0F0F0] py-2 px-3.5 font-normal 
      font-dm text-4"
     
      containerClassName="flex flex-wrap gap-x-3.5 mt-12 gap-y-3.5 md:gap-y-3.5"
      activeClassName="page-item border border-solid border-[#F0F0F0] py-2 px-3.5 font-normal 
      font-dm text-4 bg-primarycolor text-white"
    
    />
      <p className='lg:absolute lg:bottom-0 lg:right-0 mt-2.5 lg:mt-0 font-normal text-sm font-dm text-[#767676]'>
        Products from {itemOffset} to {itemOffset+itemsPerPage} of {items.length}</p>
  </>
  )
}

export default Pagination