import React from "react";
import { Switch,Route,Link} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import { useState } from "react";

export default function App(){
  const [state, setState] = useState(0);


return(
  <div>
    <nav>
    <Link to="/home">Home</Link>
   <Link to ="/contact">Contact</Link>
   <Link to="/about">About</Link>
   <Link to="/product">Product</Link>
   <Link to="/shop">Shop</Link>
   </nav>

    <h1>Hello World...</h1>
    <button onClick={() => setState(state+1)}>Click</button>
    {state}

    <Switch>
   
   
     <Route path="/contact">
       <Contact />
     </Route>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/product">
       <Product />
     </Route>
     <Route path="/shop">
       <Shop/>
     </Route>
     <Route path="/" >
       <Home />
     </Route>
     </Switch>
     
   
  </div>

)
}




// // import logo from './logo.svg';
// import './Style.css';

// import UserCard from './UserCard';

// import React, {useState} from 'react';

// function App() {
//     const [count, setCount] = useState(0);
//     const [isLog, setIsLog] = useState(false);
      
//     const handleLogClick = () => {
//       setIsLog(!isLog);
//     };

//     return (
//         <div className="App">
//           {isLog ? (<p>We are logged in</p>
//           ): (
//           <p>You are logged out, please sign in</p>)}
//           <button className="btn" onClick={handleLogClick}>{isLog ? <span>Logout</span>: <span>Login</span>}</button>
//           {/* <UserCard count = {count} handleClick={handleClick}handleClick2={handleClick2}/> */}
//         </div>
//     );
// };


//export default App;

