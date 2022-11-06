import React, { useState } from 'react'

const Eleventh = () => {
    const [input, setInput] =useState({name:'', email:"", pwd:''})

  return (
    <div>
        <form action="">
            <input type="text" placeholder='Name' value={input.name} onChange={(e)=>{setInput({...input, name:e.target.value})}}/>


            <input type="email" placeholder='email'value={input.email} onChange={(e)=>{setInput({...input, email:e.target.value})}}/>


            <input type="password" value={input.pwd} onChange={(e)=>{setInput({...input, pwd:e.target.value})}}/>


            <button>Log in</button>
        </form>



        <h3>{input.name}</h3>
        <h3>{input.email}</h3>
        <h3>{input.pwd}</h3>
    </div>
  )
}

export default Eleventh