import React, { Component } from 'react'
import Force from "./withArm"
class Ali extends Component {
    // state = {
    //     Gunshots:0
    // }
    // hover2 = ()=>{
    //     this.setState({Gunshots:this.state.Gunshots+20})
    // }
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.func} >Ali's {this.props.Weapon} {this.props.GunName} Gunshots:{this.props.st}</h1>
            </div>
        )
    }
}

export default Force(Ali, 3);

// This file is for HOC