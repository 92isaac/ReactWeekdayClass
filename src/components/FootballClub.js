import React, { Component } from 'react'
import './styles/Football.css'

export class FootballClub extends Component {
  render() {
    return (
      <div className={this.props.clName} >
        <h1>Football Club</h1>
        <h2 style={{color: "purple"}}>{this.props.name}</h2>
        <h3>Founded:{this.props.founded}</h3>
        <h4>CEO: {this.props.ceo}</h4>
        <h4>Manager: {this.props.manager}</h4>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default FootballClub