import React, { Component } from 'react';
import './Third.css'

class Third extends Component {
    render(){
        return <div>
            <div className='dev-profile'>
                <h1>My name is {this.props.name}</h1>
                <p>I am a {this.props.title}, based in {this.props.location}. I am skilled in {this.props.skills}. etc</p>
        </div>
        </div>
    }
}

export default Third;