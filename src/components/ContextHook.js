import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'


export const AppContext = createContext(null)


const ContextHook = () => {
    const [username, setUsername] = useState("")
  return (
    <div>
        <AppContext.Provider value={{username, setUsername}}>
        <Login />
        <User />
        

        </AppContext.Provider>
    </div>
  )
}

export default ContextHook