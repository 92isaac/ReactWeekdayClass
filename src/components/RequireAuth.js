import React from 'react'
import { useAuth } from './auth'
import {useNavigate } from 'react-router-dom'

export const RequireAuth = ({children}) => {
    const navigate = useNavigate()
    const auth = useAuth()
    if(!auth.user){
        return navigate('/login')
    }
  return (
    <div>
        {children}
    </div>
  )
}
