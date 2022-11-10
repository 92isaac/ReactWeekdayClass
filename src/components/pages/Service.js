import React from 'react'
import { useAuth } from '../auth'
import ServiceNav from '../ServiceNav'
import Twelvth from '../Twelvth'

const Service = () => {
    const auth = useAuth()
  return (
    <div>
        <h1>Service page under condtruction</h1>
        {auth.user}
        <ServiceNav />
        <Twelvth />
    </div>
  )
}

export default Service