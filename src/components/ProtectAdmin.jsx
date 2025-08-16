import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectAdmin = ({children}) => {
    const role=localStorage.getItem("userRole")
  return role==="admin"?children:<Navigate to='/'/>

  
}

export default ProtectAdmin