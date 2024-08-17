// import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Newweb from './components/Newweb';
// function Newwebsite(){
//   return(
//     <div>
//       <Header/>
//       <Footer/>
//       <Newweb/>
//     </div>
//   )
// }
// ReactDOM.render(<Newwebsite/>,document.getElementById('root'));


// class Newwebsite extends React.Component{
//   render(){
//     return(
//       <h1>akash</h1>
//     )
//   }
// }
// ReactDOM.render(<Newwebsite/>,document.getElementById('root'));

// const website={
//   color:"white",
//   backgroundColor:"red",
//   textAlign:"center",
// };



// const welcome=(
//   <div id="list">
//     <h2>I am Akash</h2>
//     <h3>BE ECE</h3>
//   </div>
// );

// ReactDOM.render(welcome,document.getElementById("root"));
// ReactDOM.render(welcome1,document.getElementById("root"));



// class Reactstate extends React.Component{
//   constructor(){
//     super();

//     this.state={Mywebsite:"Welcome to my page",Mycontent:"Hi buddy"}
//     }
//     render(){
//       return<h1>{this.state.Mywebsite}<br></br>{this.state.Mycontent}</h1>
//     }
// }
// ReactDOM.render(<Reactstate/>,document.getElementById("root"));




// class Reactstate extends React.Component{
//   constructor(){
//     super();

//     this.state={Mywebsite:"Welcome to my page",Mycontent:"Hi buddy"}
//     }

//     changethevalue=()=>{
//       this.setState({Mywebsite:"This is my page"})
//     }
//     render(){
//       return<div><h1>{this.state.Mywebsite}<br></br>{this.state.Mycontent}</h1><button type="button" onClick={this.changethevalue}>Change the content</button></div>
//     }
// }
// ReactDOM.render(<Reactstate/>,document.getElementById("root"));





// class Reactprops extends React.Component{
//     render(){
//       return<h1>Welcome{this.props.Mywebsite}<br></br>{this.props.Mycontent}</h1>
//     }
// }
// ReactDOM.render(<Reactprops Mywebsite="To my Website" Mycontent="I am Akash"/>,document.getElementById("root"));

// class Reactstate extends React.Component{
//   constructor(){
//     super();

//     this.state={Mywebsite:"Welcome to my page"}
//     }

//     changethevalue=()=>{
//       this.setState({Mywebsite:"This is my page"})
//     }
//     render(){
//       return<div><h1>{this.state.Mywebsite}</h1><button type="button" onClick={this.changethevalue}>Change the content</button></div>
//     }
// }n  
// ReactDOM.render(<Reactstate/>,document.getElementById("root"));

// import React, {useState,useEffect} from 'react';
// import ReactDOM from 'react-dom';

// function Examplerender(){
//   const[count,setCount]=useState(0);

//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count => count +1)
//     },.1)
//   });
//   return(
//     <h1>Website Counting details {count} times</h1>
//   )
// }
// ReactDOM.render(<Examplerender/>,document.getElementById("root"));

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));