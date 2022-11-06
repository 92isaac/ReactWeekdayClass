import React, { useState } from 'react'
import Button from './Button'

const Eight = () => {
    const [greeting, setGreeting] =useState('Morning')
    const [message, setMessage] = useState("Welcome to react class")
    
  return (
    <div>
        <h1>Good {greeting}, {message}</h1>
        <Button btnName="Log In" onClick={()=>{
            setGreeting("Afternoon")
            setMessage("Goodbye")
        }}/>
    </div>
  )
}

export default Eight