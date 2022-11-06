import React, { Component } from 'react'
import Button from './Button'

export class Counter extends Component {
    constructor(){
        super()
        this.state ={count:0}
    }

    // increment(){
    // this.setState({count: this.state.count + 1})
    // }
    increment1=()=>{
    this.setState({count: this.state.count + 1})
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Button btnName='Increment' onClick={()=>{
           this.setState({count: this.state.count + 1})  
        }}/>
        {/* <Button btnName='Increment' onClick={this.increment1}/> */}
        {/* <Button btnName='Increment' onClick={this.increment.bind(this)}/> */}
      </div>
    )
  }
}

export default Counter