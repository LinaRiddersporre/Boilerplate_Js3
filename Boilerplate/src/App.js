import React from "react";
import { NavLink } from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <div className="divBody">
        <h1>Hello World</h1>
        <ul>
          <li><NavLink to='/Admin'>Admin</NavLink></li>
          <li><NavLink to='/NotFound'>Not Found</NavLink></li>
          <li><NavLink to='/LogIn'>Login</NavLink></li>

        </ul>
      
      </div>
    )
  }
}

export default App;