// import React, { Component, Fragment } from "react";

// const Student = (props)=>{
//     return <h1>This is Practice of Function Based Components by {props.name}</h1>
// } Function Based Components

// class Student extends Component{
//     render(){
//         return <h1>This is Practice of Class Based Components by {this.props.name}</h1>
//     }
// }

// export default Student;


// import React, {Component, Fragment } from "react";
// // import PropTypes from "prop-types"
// // import "./style.css";
// // const Student = (props)=>{
// //     return <h1>Hello {props.name}</h1>
// // }

// // export default Student;

// // Props Using Function Based Components
// // const Student = (props)=>{
// //     return (
// //         <Fragment>
// //             <h1>This is Practice of Props By using Function Based Components With {props.name}</h1>
// //             <h2>This is Practice of Props By using Function Based Components whose age is {props.age}</h2>
// //             <h3>This is Practice of Props By using Function Based Components whose roll is {props.roll}</h3>
// //         </Fragment>
// //     )
// // } 
// // class Student extends Component{
// //     render(){
// //         return (
// //             <Fragment>
// //                 <p>This is Practice of Props by using Class Based Components with {this.props.name} </p>
// //                 <p>This is Practice of Props by using Class Based Components whose age is {this.props.age} </p>
// //                 <p>This is Practice of Props by using Class Based Components whose roll is {this.props.roll} </p>
// //             </Fragment>
// //         )
// //     }
// // }

// // PropTypes and Default Props Class
// // Student.propTypes = {
// //     name: PropTypes.string.isRequired,
// //     age: PropTypes.number.isRequired,
// //     roll:PropTypes.number.isRequired
// // } // To check the type of props and give error if type doesn't match that type which declared here

// // Student.defaultProps={
// //     name:"Programming with Haris",
// //     age:"18",
// //     roll:"1"
// // }
// // export default Student;

// // Props Children Class
// // Function Based Components

// // const Student = (props)=>{
// //     return <h1>Hello Haris {props.children}</h1>
// // }
// // Class Based Components
// // class Student extends Component{
// //     render(){
// //         return <h1>Hello Haris {this.props.children}</h1>
// //     }
// // }

// // export default Student;



// // States

// // Directly Inside Class/Without Constructor State
// // class Student extends Component{
// //     state = {
// //         name:"Haris",
// //         roll:this.props.roll
// //     }
// //     render(){
// //         return (
// //             <h1>Hello {this.state.name} your roll no is {this.state.roll} </h1>
// //         )
// //     }
// // }

// // Inside Constructor/With Constructor State

// // class Student extends Component{
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //             name:"Ali",
// //             roll:this.props.roll
// //         }
// //     }
// //     render(){
// //         return (
// //             <h1>Hello {this.state.name} your roll no is {this.state.roll}</h1>
// //         )
// //     }
// // }


// Event Handling

// // class Student extends Component{
// //     // constructor(props){
// //     //     super(props);
// //     //     this.handleClick = this.handleClick.bind(this)
// //     // }
// //     handleClick=()=>{
// //         console.log("Button Clicked", this);
// //     } // Either use arrow function or use constructor in a way assigned above to bind "this"
// //     render(){
// //         return(
// //             <Fragment>
// //                 <h1>Click Event</h1>
// //                 <button onClick={this.handleClick}>Click Here</button>
// //             </Fragment>
// //         )
// //     }
// // }

// // function Student(props){
// //     const handleClick =(e)=>{
// //         e.preventDefault();
// //         console.log("The Button was clicked")
// //     }
// //     return (
// //         <div>
// //             <h1>Hello {props.name}</h1>
// //             <button onClick={handleClick}>Click me</button>
// //         </div>
// //     )
// // }

// class Student extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "Haris",
//             age: "20"
//         }
//     }
//     handleClick = ()=>{
//         this.setState(
//             {
//                 name:"Ali",
//                 age:"30"
//             }
//         )
//     }


//     // handleClick = ()=>{
//     //     this.setState(function(state,props){
//     //         console.log(state)
//     //     })
//     // }

//     render() {
//         return (
//             <Fragment>
//                 <h1>Hello {this.state.name} your age is {this.state.age}</h1>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </Fragment>
//         )
//     }
// }

// Passing Arguments in Events
// class Student extends Component{
//     state = {
//         name:"Haris",
//         age:50,
//         roll:2402001,
//         institute:"FC"
//     }
//     handleClick = (roll,institute, e)=>{
//         console.log(roll)
//         console.log(e)
//         console.log(institute)
//     }

//     handleClickArg = (e)=>{
//         this.handleClick(this.state.roll,this.state.institute, e)
//     }
//     render(){
//         return (
//             <Fragment>
//                 <h1>Hello {this.state.name}, Your age is {this.state.age}</h1>
//                 <button onClick={this.handleClickArg}>Press Here</button>
//             </Fragment>
//         )
//     }
// }

// export default Student;


//    import React, { Component, Fragment } from 'react'
//    import Marks from "./Marks"

//    export default class Student extends Component {
//        render() {
//            console.log("App - Student Rendered")
//            return (
//                <Fragment>
//                    <h1>Hello {this.props.name}</h1>
//                    <Marks />
//                </Fragment>
//            )
//        }
//    }

                                                                    // Updating In React Js

// import React, { Component } from 'react'
// import Marks from "./Marks"
// export default class Student extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             roll: 2402001
//         }
//     }
//     clickHandle = () => {
//         console.log("The Button was Clicked")
//         // this.setState({roll:2402002})
//         this.setState({ roll: this.state.roll + 1 })
//     };
//     render() {
//         console.log("Student Rendered")
//         return (
//             <div>
//                 <Marks roll={this.state.roll} />
//                 {/* here we passed roll as an attribute means we can access it from props in Marks Component */}
//                 <button onClick={this.clickHandle}>Change</button>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'

// export default class Student extends Component {
//     componentDidMount(){
//         console.log("Student Mounted");
//     }
//     componentWillUnmount(){
//         console.log("Student Will Unmount");
//     }
//     render() {
//         console.log("Student Rendered");
//         return (
//             <div>
//                 <h1>Student Mounted</h1>
//             </div>
//         )
//     }
// }

// For If Else Statements
// import React, { Component } from 'react'

// export default class Student extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome User</h1>
//                 <button>Sign in</button>
//             </div>
//         )
//     }
// }

// AND Operator with Inline Statements

// import React, { Component } from 'react'

// export default class Student extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>This is Student Component</h1>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'

// export default class Student extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome Haris</h1>
//                 <button onClick={this.props.clickData}>Sign in</button>
//             </div>
//         )
//     }
// }



// import React, { Component } from 'react'

// export default class Student extends Component {
//     render() {
//         return <li>{this.props.value}</li>
//     }
// }

// External CSS in props

// import React, { Component, Fragment } from 'react'

// export default class Student extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <h2 className={this.props.color}>This is Student Component {this.props.name}</h2>
//             </Fragment>
//         )
//     }
// }

// import React, { Component, Fragment } from 'react'
// import Style from './Student.module.css'
// export default class Student extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <h1 className={Style.txt}>This is Tutorial of CSS Modules in Student.js</h1>
//             </Fragment>
//         )
//     }
// }

// import React, { Component } from 'react'

// export default class Student extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello {this.props.num2 *2}</h1>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'
// import Marks from "./Marks"
// export default class Student extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Student Component</h1>
//                 <Marks />
//             </div>
//         )
//     }
// }