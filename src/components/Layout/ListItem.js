import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({itemname,className,href,value}) => {
  return (
    <li className={className} value={value}>
      <Link to={href}>
         {itemname}
      </Link>
      </li>
  )
}

export default ListItem