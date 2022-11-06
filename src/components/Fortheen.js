import React, { useEffect, useState } from 'react'

const Fortheen = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title= `You clicked ${count} times`
    })
    
  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count - 1)}}>-</button>
    </div>
  )
}

export default Fortheen