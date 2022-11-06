import React from 'react'
import AsynAwait from '../AsynAwait'
import BootstrapNavbar from '../BootstrapNavbar'
import Fiftheen from '../Fiftheen'
import Fortheen from '../Fortheen'
import Sixtheen from '../Sixtheen'

const Home = () => {
  return (
    <div>
        <BootstrapNavbar />
        <Fortheen />
        <Fiftheen />
        {/* <Sixtheen /> */}
        <AsynAwait />
    </div>
  )
}

export default Home