import React from 'react'



let time = new Date().getHours();

const Afternoon = () => {
  return (
    <div className={time >=12 && time < 17 ? 'dao' : "wrap"}>
        <p>
        Good afternoon, dear. I hope you experience all the joy and success on this beautiful day.
        </p>
    </div>
  )
}

export default Afternoon