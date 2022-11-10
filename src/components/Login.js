import React, { useContext } from 'react'
import { AppContext } from './ContextHook'


const Login = () => {
    const {setUsername} = useContext(AppContext)
  return (
    <div>
        <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        <button>Submit</button>
    </div>
  )
}

export default Login