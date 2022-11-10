import React from 'react'
import ContextHook from '../ContextHook'
import Fiftheen from '../Fiftheen'
import Fortheen from '../Fortheen'

const Home = () => {
  return (
    <div>
        <Fortheen />
        <Fiftheen />
        {/* <Sixtheen /> */}
        {/* <AsynAwait /> */}
        <ContextHook/>
    </div>
  )
}

export default Home