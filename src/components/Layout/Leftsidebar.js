import React from 'react'
import SidebarContent from './SidebarContent';
import { Category,colors,brands,prices} from '../../data/data';

function Leftsidebar() {
  return (
    <>
    <SidebarContent dropdown={true} droptitle='Shop by Category' data={Category}/>
      <SidebarContent dropdown={false} droptitle='Shop by Color' data={colors}/>
      <SidebarContent dropdown={true} droptitle='Shop by Brand' data={brands}/>
      <SidebarContent dropdown={true} droptitle='Shop by Price' data={prices}/>
    {/* 
    <SidebarContent dropdown={true} droptitle='Shop by Brand' data={brands}/>
    <SidebarContent dropdown={true} droptitle='Shop by Price' data={prices}/> */}
    
    </>
  )
}

export default Leftsidebar