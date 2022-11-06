import React, { Component } from 'react'
import Button from './Button'


// const tunde={
//     color:'pink', 
//     padding: '10px 20px',
//     border: 'none',
// }

export class Fouth extends Component {
    constructor(){
        super()
        this.state ={time:' Morning', greeting:'Welcome', msg:'to React Class'}
    }
    changeMessage=()=>{
        this.setState({time:"Evening", greeting:"Goodbye", msg:"Hope we will see you soon"})
    }
  render() {
    return (
      <div>
        <h1>Good {this.state.time}, {this.state.greeting} {this.state.msg}</h1>
        <Button btnName="Log Out" className='fat' onClick={this.changeMessage}/>
      </div>
    )
  }
}

export default Fouth