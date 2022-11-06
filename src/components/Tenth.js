import React, { useState } from 'react'
import Button from './Button'

const Tenth = () => {
    const [count, setCount] =useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <Button btnName="Increment" onClick={()=>{setCount(count + 1)}}/>
        <Button btnName="Increment" onClick={()=>{setCount(count - 1)}}/>
    </div>
  )
}

export default Tenth