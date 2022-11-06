import React, { Component } from 'react'
import Button from './Button'

export class Fifth extends Component {
    constructor(){
        super()
        this.state={count: 0}
    }

    componentDidMount(){
        document.title =`Clicked ${this.state.count}`
    }

    componentDidUpdate(){
        document.title =`Clicked ${this.state.count}` 
    }

    componentWillUnmount(){
        setTimeout(()=>{
            document.title =`React App`
        }, 10000)
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Button btnName='Increment' onClick={()=>{
            this.setState({count: this.state.count + 3})
            console.log(this.state.count)}}/>
      </div>
    )
  }
}

export default Fifth