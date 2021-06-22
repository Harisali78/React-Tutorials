import React, { Component } from 'react'
const Force = (Officers, shots) =>{
    class Batalion extends Component{
        state = {
            Gunshots:0
        }
        hover = ()=>{
            this.setState({Gunshots:this.state.Gunshots+shots})
        }
        render(){
            return <Officers Weapon="MachineGun" st={this.state.Gunshots} func={this.hover}/>
        }
    }
    return Batalion
}
export default Force;

// This file is for HOC
