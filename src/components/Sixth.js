import React, { Component } from 'react'
import Button from './Button'

export class Sixth extends Component {

    constructor(){
        super()
        this.state={fName:"", lName:"", email:"", password:"",}
        this.database =[]
    }
  render() {
    return (
      <div>
        <form>
            <input type="text"  placeholder='first name' value={this.state.fName} onChange={(event)=>{this.setState({fName:event.target.value})}}/>

            <input type="text"  placeholder='last name'value={this.state.lName} onChange={(event)=>{this.setState({lName:event.target.value})}}/>


            <input type="email"  placeholder='email'value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>

            <input type="password"  placeholder='password'value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}}/>

            <Button btnName='Submit' onClick={(e)=>{

                e.preventDefault();
                console.log(this.state)
                this.database.push(this.state)
                console.log(this.database)

            }}/>
        </form>
      </div>
    )
  }
}

export default Sixth