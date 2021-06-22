// import React, { Component, Fragment } from "react";

// class App extends Component{
//     render(){
//         // return React.createElement("h1", null, "Hello React Component") Both of these return lines are same
//         return (
//             <Fragment>
//         <h1>Hello React Component</h1> <h2>Hello React Component 2</h2> <h3>Hello React Component 3</h3> 
//         </Fragment>
//     )
//     }
// } // That's how we can create a component

// export default App; // How to export a component


// import React from "react";
// import Student from "./Student"

// Composing Components
// const App = ()=>{
//     return (
//         <div>
//             <Student name="Haris" />
//             <Student name="Saad"/>
//             <Student name="Ali"/>
//             <Student name="Hassan"/>
//         </div>
//     )
// }

// export default App;


// Mounting in React Js

// Four Steps for Mounting:
// => Constructor
// => getDerivedStateFromProps
// => componentDidMount
// => Render
// import React, { Component, Fragment } from 'react'
// import Student from "./Student";
// export default class App extends Component {
//     constructor(props) {
//         super(props)
//         console.log("App - Constructor Called")
//         console.log(props);
//         this.state = {
//             roll : "2402001"
//         };
//     }

//     static getDerivedStateFromProps(props, state){
//         console.log("App - Get Derived State From Props");
//         console.log(props, state);
//         return null;
//     }

//     componentDidMount(){
//         // Get data from Server and set Data to state
//         // console.log("App - Component Did Mount - Mounted");
//         setTimeout(() => {
//             this.setState({roll:"1"})
//         }, 2000);
//     }
//     render() {
//         console.log("App - Rendered Method Called");
//         return (
//             <Fragment>
//                 <Student name="Haris"/>
//             </Fragment>
//         )
//     }
// }

// Unmounting in React js


// import React, { Component } from 'react'

// export default class App extends Component {
//     componentDidMount(){
//         console.log("App Mounted");
//     }
//     componentWillUnmount(){
//         console.log("App Will Unmount");
//     }
//     render() {
//         console.log("App Rendered");
//         return (
//             <div>
//                 <h1>App Mounted</h1>
//             </div>
//         )
//     }
// }


// useState Hook

// function App (){
//     const [name, setName] = useState(["Haris"])
//     const swicthName = ()=>{
//         setName("Ali")
//     }
//     return (
//         <Fragment>
//             <h1>Your name is {name}</h1>
//             <button onClick={swicthName}>Switch</button>
//         </Fragment>
//     )
// }

// export default App;

// useEffect Hook

// import React, {Fragment, useState, useEffect} from 'react'

// export default function App() {
//     const [count, setCount] = useState(0)
//     const [discount, setDiscount] = useState(0)
//     const incrementCount = ()=>{
//         setCount(count + 1)
//     }
//     const decrementCount = ()=>{
//         setDiscount(discount - 1)
//     }

//     useEffect(()=>{
//         console.log("Use Effect Called")
//     },[count])
//     return (
//         <Fragment>
//             <h1>Count : {count}</h1>
//             <button onClick={incrementCount}>Increment</button>
//             <h1>Discount : {discount}</h1>
//             <button onClick={decrementCount}>Decrement</button>
//         </Fragment>
//     )
// }


// import React, { Fragment } from 'react'
// import useCustom from "./Custom"

// function App(){
//     const data = useCustom();

// return(
//     <Fragment>
//         <h1>Count : {data.count}</h1>
//         <button onClick={data.handleClick}>Switch</button>
//     </Fragment>
// )
// }
// export default App;

// If Else Statements

// import React, { Component } from 'react'
// import Student from "./Student"
// import Marks from "./Marks"

// export default class App extends Component {
//     render() {
//         const condition = this.props.isRegistered;
//         if (condition) {
//             return <Student />
//         }
//         return <Marks />
//         return (
//             <div>
//                 <h1>This is App Component</h1>
//             </div>
//         )
//     }
// }


// AND Operator with Inline If Else Statements
// import React, { Component } from 'react'
// import Student from "./Student"

// export default class App extends Component {
//     render() {
//         const property = this.props.SignIn;
//         return (
//             <div>
//                 {property && <Student />}
//             </div>
//         )
//     }
// }

// import React, { Component, Fragment } from 'react'
// import Student from "./Student"
// import Marks from "./Marks"

// export default class App extends Component {
//     state = {
//         isLoggedIn: true
//     }
//     clickLogIn = ()=>{
//         this.setState({isLoggedIn:true})
//     }
//     clickLogOut = ()=>{
//         this.setState({isLoggedIn:false})
//     }
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         // if (isLoggedIn) {
//         //     return <Marks clickData={this.clickLogOut}/>
//         // }
//         // else{
//         //     return <Student clickData={this.clickLogIn}/>
//         // }

        
//         return (
//             <Fragment>
//                 {/* Inline If else Statements: An Alternative */}
//                 {/* {isLoggedIn ? (<Marks clickData={this.clickLogOut}/>):(<Student clickData={this.clickLogIn}/>)} */}

//                 {/* By IIFE */}
//                 {
//                     (
//                         (() =>{
//                             if (isLoggedIn) {
//                                 return <Marks clickData={this.clickLogOut}/>
//                             }
//                             else{
//                                 return <Student clickData={this.clickLogIn}/>
//                             }
//                         })()
//                     )
//                 }
                
//             </Fragment>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     const arr = this.props.number
//     // const newArr = arr.map(num =>{
//     //   console.log("Num = ", num);
//     //   return <li name="Haris">{num*2}</li>
//     // })
//     // console.log("oldArray = ", arr);
//     // console.log("newArray = ", newArr);
//     return (
//       <ul>
//         {/* <li>{arr[0]*2}</li>
//         <li>{arr[1]*2}</li>
//         <li>{arr[2]*2}</li>
//         <li>{arr[3]*2}</li>
//         <li>{arr[4]*2}</li> */}
//         {/* this is not recommended. So use map Method */}
//         {arr.map(num=>(
//           <li>{num}</li>
//         ))}
//       </ul>
//     )
//   }
// }

// How to use states in Arrays
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     user:[
//       {
//         name:"Haris",
//         email:"Haris@gmail.com",
//         id:2402001
//       },
//       {
//         name:"Ali",
//         email:"Ali@gmail.com",
//         id:2402002
//       },
//       {
//         name:"Saad",
//         email:"Saad@gmail.com",
//         id:2402003
//       }
//     ],
//     isLoggedIn:false
//   }
//   render() {
//     // How to use map in state
//     const newUser = this.state.user.map(num=>{
//       console.log(num)
//       return (
//         <h1 key={num.id}>Name:{num.name}, Email:{num.email}, Id:{num.id}</h1>
//       )
//     })
//     return (
//       <div>
//         {/* <h1>Name:{this.state.user[0].name}, Email:{this.state.user[0].email}, Id:{this.state.user[0].id}</h1>
//         <h1>Name:{this.state.user[1].name}, Email:{this.state.user[1].email}, Id:{this.state.user[1].id}</h1>
//         <h1>Name:{this.state.user[2].name}, Email:{this.state.user[2].email}, Id:{this.state.user[2].id}</h1> */}
//         {newUser}
//       </div>
//     )
//   }
// }

// Can key be passed as props

// import React, { Component } from 'react'
// import Student from "./Student"
// export default class App extends Component {
//   render() {
//     const arr = this.props.number
//     const arr2 = arr.map(index=>{
//       return <Student key={index} value={index}/>
//     })
//     return (
//       <div>
//         <ul>{arr2}</ul>
//       </div>
//     )
//   }
// }


// Inline StyleSheet in React JS

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     const btnStyle={
//       backgroundColor:'black',
//       color:'white'
//     }
//     const btnStyle2={
//       padding:'5px',
//       margin:'20px'
//     }
    
//     return (
//       <div>
//         <button style={{...btnStyle, ...btnStyle2}}>Click here</button> 
//         {/* ... is spread operator */}
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     change:false
//   }
//   switchCol = ()=>{
//     this.setState({change:true})
//   }
//   render() {
//     const styleSheet = {
//       backgroundColor:'brown',
//       color:'white'
//     }
//     if (this.state.change) {
//       styleSheet.backgroundColor='white';
//       styleSheet.color='black'
//     }
//     return (
//       <div>
//         <button style={styleSheet} onClick={this.switchCol}>Change</button>
//       </div>
//     )
//   }
// }

// External CSS with condition

// import React, { Component, Fragment } from 'react'
// import Student from './Student'
// import './app.css' 
// export default class App extends Component {
//   state = {
//     name: "Ali"
//   }
//   render() {
//     const style = false;
//     return (
//       <Fragment>
//         <h1 className="AppClass">This is App Component {this.state.name}</h1>
//         <Student color={style ? "AppClass":"StudentClass"} name="Haris"/>
//       </Fragment>
//     )
//   }
// }

// import React, { Component, Fragment } from 'react'
// import Student from './Student'
// import Style from './App.module.css'
// // import picture from './bg7.jpg'
// export default class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h1 className={Style.txt}>This is Tutorial of CSS Modules in App.js</h1>
//         <Student />
//         {/* <img src={process.env.PUBLIC_URL + "/images/bg2.jpg"} alt="404 error not found" /> That's how you can access any image from public folder in js file */}
//         {/* <img src={picture} alt="404 error found" /> That's how you can access any image from src folder in js file. First import that image */}
//       </Fragment>
//     )
//   }
// }


// Controlled Input
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     value:""
//   }
//   changeHandle = e=>{
//     console.log("Changed", e.target.value)
//     this.setState({value:e.target.value.toUpperCase().substr(0,7)})
//   }
//   render() {
//     return (
//       <div>
//         <form action="">
//           <h1>Controlled Input</h1>
//           <input type="text" value={this.state.value} onChange={this.changeHandle}/>
//         </form>
//       </div>
//     )
//   }
// }

// Controlled Multiple Inputs

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     name:"",
//     email:"",
//     password:""
//   }

  // handleName = (e) =>{
  //   console.log(e.target.value)
  //   this.setState({name:e.target.value})
  // }
  // handlePassword = (e) =>{
  //   console.log(e.target.value)
  //   this.setState({password:e.target.value})
  // }
  // But if we have too many inputs then onchange event for every input is not recommended. then we use name attribute

//   handleInp = (e) =>{
//     console.log(e.target.name)
//     const emVal = e.target.name ==="email"?
//     e.target.value.toLowerCase().substr(0,20):e.target.value
//     // this.setState({[e.target.name]:e.target.value})
//     this.setState({[e.target.name]:emVal})
//   }

//   submitForm = (e) =>{
//     console.log(e.target.name);
//     e.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         <form action="" onSubmit={this.submitForm}>
//           <label htmlFor="">
//             Name:<input type="text" name="name" id="" value={this.state.name} onChange={this.handleInp}/>
//           </label>
//           <br /><br />
//           <label htmlFor="">
//             Email:<input type="email" name="email" id="" value={this.state.email} onChange={this.handleInp}/>
//           </label>
//           <br /><br />
//           <label htmlFor="">
//             Password:<input type="text" name="password" id="" value={this.state.password} onChange={this.handleInp}/>
//           </label>
//           <br /><br />
//           <input type="submit" value="Submit"/>
//         </form>
//       </div>
//     )
//   }
// }

// Uncontrolled Inputs

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.inpRef = React.createRef()
    
//   }
//   componentDidMount() {
//     console.log(this.inpRef.current)
//     this.inpRef.current.focus();
//   }
  
//   render() {
//     return (
//       <div>
//         <form action="">
//           Name:<input type="text" name="" id="" ref={this.inpRef}/><br /><br />
//           Email:<input type="email" name="" id="" /><br /><br />
//           Password:<input type="text" name="" id=""/><br /><br />
//         </form>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       value:""
//     }
//     this.makeRef = React.createRef();
//   }
//   subRef = e =>{
//     e.preventDefault();
//     console.log(this.makeRef.current.value);
//     this.setState({value:this.makeRef.current.value})
//   }
//   render() {
//     return (
//       <div>
//         <h1>You typed:{this.state.value}</h1>
//         <form action="" onSubmit={this.subRef}>
//           <input type="text" name="" id="" ref={this.makeRef}/>
//           <input type="submit" value="Submit"/>
//         </form>
//       </div>
//     )
//   }
// }

// Callback Refs:

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.makeRef = null;
//     this.setRef = e =>{
//       this.makeRef = e;
//     }
//   }
//   componentDidMount=()=> {
//     if (this.makeRef) {
//       this.makeRef.focus();
//     }
//   }
  
//   render() {
//     return (
//       <div>
//         <form action="">
//           Name:<input type="text" name="" id="" /><br /><br />
//           Email:<input type="text" name="" id="" ref={this.setRef}/><br /><br />
//           Password:<input type="text" name="" id="" /><br /><br />
//         </form>
//       </div>
//     )
//   }
// }

// Lifting State Up 
// Check in Student and Marks file

// import React, { Component } from 'react'
// import Student from "./Student"
// import Marks from "./Marks"
// export default class App extends Component {
//   state = {
//     num: 10
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello {this.state.num}</h1>
//         <Student num2 = {this.state.num}/>
//         <Marks num3 = {this.state.num}/>
//       </div>
//     )
//   }
// }


// Context API

// import React, { Component } from 'react'
// import Student from "./Student"
// // export const Context = React.createContext();
// import {Provider} from "./context"
// export default class App extends Component {
//   state = {
//     name:"Haris",
//     age:20,
//     role:"Programmer"
//   }
//   clickButton = ()=>{
//     this.setState({age:this.state.age+1, name:"Ali", role:"Developer"})
//   }
//   render() {
//     const ContextVal = {
//       data:this.state,
//       handle:this.clickButton
//     }
//     return (
//       <div>
//         <Provider value={ContextVal}>
//             <Student />
//         </Provider>
//       </div>
//     )
//   }
// }

// HOC (Higher Order Component)

import React, { Component } from 'react'
import Haris from "./Haris"
import Ali from "./Ali"
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <Haris />
        <Ali />
      </div>
    )
  }
}
