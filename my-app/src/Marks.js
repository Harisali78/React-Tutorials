// import React, { Component, Fragment } from 'react'

// export default class Marks extends Component {
//     render() {
//         console.log("App - Marks Rendered")
//         return (
//             <Fragment>
//                 <h1>Marks Component</h1>
//             </Fragment>
//         )
//     }
// }

// import React, { Component } from 'react'
// export default class Marks extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mroll: this.props.roll
//         }
//     }
//     static getDerivedStateFromProps(props, state) {
//         console.log("Get Derived State From Props");
//         console.log(props, state);
//         if (props.roll !== state.mroll) {
//             return { mroll: props.roll }
//         }
//         return null;
//     }
//     // shouldComponentUpdate(nextProps, nextState){
//     //     if (this.state.mroll < 2402010) {
//     //         console.log("Mark - Should Component Update")
//     //         console.log(nextProps, nextState)
//     //         return true;
//     //     }
//     //     console.log(nextProps, nextState)
//     //     return false;
//     // }
//     getSnapshotBeforeUpdate(prevProps, prevState){
//         console.log("Marks - Get Snapshot Before Update - It runs before update")
//         console.log(prevProps, prevState);
//         return 45;
//     }
//     componentDidUpdate(prevProps, prevState, snapshot){
//         console.log("Marks - Component Did Update - It runs after update")
//         console.log(prevProps, prevState, snapshot)
//     }
//     render() {
//         console.log("Marks Rendered");
//         return (
//             <div>
//                 <h1>{this.state.mroll}</h1>
//             </div>
//         )
//     }
// }

// For If Else Statements
// import React, { Component } from 'react'

// export default class Marks extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome Guest</h1>
//                 <button>Sig Up</button>
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class Marks extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome as a Guest</h1>
//                 <button onClick={this.props.clickData}>Sign Up</button>
//             </div>
//         )
//     }
// }
// import React, { Component } from 'react'

// export default class Marks extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello {this.props.num3 * 3}</h1>

//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'
// // import { Context } from "./App"
// import {Consumer} from "./context"
// export default class Marks extends Component {
//     render() {
//         return (
//             <div>
//                 <Consumer>
//                     {({ data, handle }) => (
//                         <div>
//                             <h2>Name:{data.name}</h2>
//                             <h2>Age:{data.age}</h2>
//                             <h2>Role:{data.role}</h2>
//                             <button onClick={handle}>Change Age</button>
//                         </div>
//                     )
//                 }
//                 </Consumer>
//             </div>
//         )
//     }
// }