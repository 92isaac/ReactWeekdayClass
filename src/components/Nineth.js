import React, { useState } from 'react'
import Button from './Button'
import image1 from './images/Ellipse 22.png'
import image2 from './images/chidi.png'

const Nineth = () => {
    const [data, setData]= useState({img:image1, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque est vero. Corporis unde sint deleniti in est dolore veritatis.'})
  return (
    <div>
        <div className="wrap">
            <img src={data.img} alt="" />
            <p>{data.text}</p>
            <Button btnName="Change Button" onClick={()=>{setData({img:image2, text:"Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I."})}}/>
        </div>
    </div>
  )
}

export default Nineth