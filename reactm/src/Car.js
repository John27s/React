import React from "react";
// import ReactDOM from "react-dom/client";
// class Car extends React.Component{
//   constructor(props){
//     super();
//     this.state={
//       name:props.name,
//       year:props.year
//     }
//   }
//   render(){
    
//     const Change = () => {
//       this.setState({name:"Audi",year:"2024"})
//     }
//     return <div><h1>{this.state.name},{this.state.year}</h1><button onClick={Change}>Click</button></div>
//   }
// }
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<Car name="Swift" year="2023"></Car>)

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//   </table>
// );

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myelement);

// const myelement = (
//     <div>
//       <p>I am a paragraph</p>
//       <p>I am paragraph too.</p>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);

// const myElement = <h1 className="myclass">Hello World</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//Class Component

// class Car extends React.Component {
//   render() {
//     return <h1>Hi, I am a Car!</h1>;
//   }
// }

// Function Component

// function Car(){
//   return <h2>Hi, I am a Car!</h2>
// }
// function Car(){
//   return <h2>Hi, I am a Car!</h2>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<car />);


// import React from "react";
// import ReactDOM from 'react-dom/client';

// function Car(){
//   return <h2>Hi, I am a Car!</h2>;
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

// import react from "react";
// import ReactDOM from 'react-dom/client';

// function Car(){
//   return<h2>Hi I am a Car!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

// function Car(props){
//   return <h2>I am a {props.color} Car!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red"/>);

// Components in Components

// import React from "react";
// import ReactDOM from 'react-dom/client';
// import Car from './Car.js';

// function Car(){
//   return<h2>I am a Car!</h2>;
// }
// function Garage(){
//   return(
//     <>
//     <h1>Who lives in my Garage?</h1>
//     <Car />
//     </>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

//Components in Files

//  import React from "react";
// import ReactDOM from 'react-dom/client';

function Car(){
  return<h2>Hi I am a Car!</h2>
}



export default Car;
