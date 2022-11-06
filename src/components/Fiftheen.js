import React, { useEffect, useState } from 'react'

const Fiftheen = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    })

  return (
    <div>
        <h1>{time}</h1>
    </div>
  )
}

export default Fiftheen