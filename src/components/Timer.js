import React, { Component } from 'react'

export class Timer extends Component {
    constructor(){
        super()
        this.state ={time: new Date().toLocaleTimeString()}
    }



    componentDidMount(){
        setInterval(()=>{
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)
    }


  render() {
    return (
      <div>
        <h1>The time says {this.state.time}</h1>
      </div>
    )
  }
}

export default Timer