import React from 'react'
import cardImage1 from './images/black-beautiful-ladies-smiling 1.png'
import './styles/Twelvth.css'
import Twelvth2 from './Twelvth2'

const Twelvth = () => {
  return (
    <div className='card-wrapper'>
        <div className="cards">
           <Twelvth2 
            pict={cardImage1}
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas incidunt quidem, libero tenetur sint, at ut saepe ullam porro repudiandae hic qui reprehenderit. Temporibus assumenda qui praesentium tempora necessitatibus?'
            />
           <Twelvth2 
            pict={cardImage1}
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas incidunt quidem, libero tenetur sint, at ut saepe ullam porro repudiandae hic qui reprehenderit. Temporibus assumenda qui praesentium tempora necessitatibus?'
            />
           <Twelvth2 
            pict={cardImage1}
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas incidunt quidem, libero tenetur sint, at ut saepe ullam porro repudiandae hic qui reprehenderit. Temporibus assumenda qui praesentium tempora necessitatibus?'
            />
           <Twelvth2 
            pict={cardImage1}
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas incidunt quidem, libero tenetur sint, at ut saepe ullam porro repudiandae hic qui reprehenderit. Temporibus assumenda qui praesentium tempora necessitatibus?'
            />
        </div>
    </div>
  )
}

export default Twelvth