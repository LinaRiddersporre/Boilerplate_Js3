import React from "react";
import RenderData from "./components/renderData/renderData";


class App extends React.Component{
  render(){
    return(
      <div className="divBody">
      <RenderData/>
      <h1>Hello World</h1>
      
      </div>
    )
  }
}

export default App;