import React, { Children } from 'react'

const List = ({children,className,id,selected}) => {
    console.log(List)
  return (
    <ul className={className} id={id} selected={selected}>{children}</ul>
  )
}

export default List