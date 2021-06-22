import React, { Component } from 'react'
import Force from "./withArm"
class Haris extends Component {
    // state = {
    //     Gunshots:0
    // }
    // hover = ()=>{
    //     this.setState({Gunshots:this.state.Gunshots+10})
    // }
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.func}>Haris {this.props.Weapon} Gunshots:{this.props.st}</h1>
            </div>
        )
    }
}

export default Force(Haris, 5);

// This file is for HOC