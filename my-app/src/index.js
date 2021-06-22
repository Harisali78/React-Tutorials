import React from "react";
import ReactDOM from "react-dom";
// import Student from "./Student"
import App from "./App"
// import App from "./App" // How to import a component

// // let el = React.createElement("h1", null, "Hello React App"); This line and below line's code have same meaning but this line's code is not recommended.
// let el = <h1>Hello React App</h1>;
// ReactDOM.render(el, document.getElementById("toor")); // How to render element

// ReactDOM.render(<Student name = "Haris" />, document.getElementById("root")); // How to render Component

// import App from "./App"

// import Student from "./Student";
// ReactDOM.render(<Student name="Haris" age={20} roll={24_2001} />, document.getElementById("root")); // This is for prop-types and default props class


// ReactDOM.render(<Student>That's how you can access this data from child</Student>, document.getElementById("root"));

// ReactDOM.render(<App name="I_Am_Prop" />, document.getElementById("root"));

// ReactDOM.render(<App isRegistered={false}/>, document.getElementById("root"))
// ReactDOM.render(<Student />, document.getElementById("toor"))
// ReactDOM.unmountComponentAtNode(document.getElementById("root"))
// ReactDOM.render(<App SignIn={true}/>, document.getElementById("root"))
// const arrValue = [20, 40, 60]
// ReactDOM.render(<App number={arrValue}/>, document.getElementById("root"));
const newArr = [10, 20, 30]
ReactDOM.render(<App number={newArr}/>, document.getElementById("root"));