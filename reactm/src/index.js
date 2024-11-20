import React from "react";
import ReactDOM from "react-dom/client";
class Car extends React.Component{
  constructor(props){
    super();
    this.state={
      name:props.name
    }
  } 
  render(){
    const Change = () => {
      this.setState({name:"Audi"})
    }
    return <div><h1>{this.state.name}</h1><button onClick={Change}>Click</button></div>
  }
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Car name="Swift"></Car>)

// import React from "react";
// import ReactDom from "react-dom/client";
// class Car extends React.Component{
//   Constructor(props){
//     Super();
//     this.state={
//       name:props.name
//     }
//   }
//   render(){
//     const Change = () => {
//       this.setState({name:"Audi"})
//     }
//     return (<div><h1>{this.state.name}</h1><button onClick={Change}>Click</button></div>)
//     }
//   }
// const container = document.getElementById("root");
// const root = ReactDom.createRoot(container);
// root.render(<Car name="swift"></Car>)