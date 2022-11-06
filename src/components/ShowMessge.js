import React from 'react'
import Afternoon from './Afternoon';
import Evening from './Evening';
import Morning from './Morning';

const ShowMessge = () => {
    const time = new Date().getHours()
    let display;
    if(time < 12){
        display = <Morning/>
    }else if(time >=12 && time <17){
        display = <Afternoon />
    }else{
        display = <Evening />
    }
  return (
    <div>
        {display}
    </div>
  )
}

export default ShowMessge