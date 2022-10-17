import React from "react";
import Form from "./components/form/form";

// const myName = 'Cornelia'
class App extends React.Component{
  myName = <h3>Lina</h3>
  welcomeMessage = <div>hej hej {this.myName}</div>
  total = 0;
  
  // displayMyName = () => this.myName 
  displayMyName = () => {
    return(
      this.myName
    )
  }

  // Map Iterator vs Map data Structure
  mapIterator = () => {
    const cars = ['volvo', 'bmw', 'lynk', 'lexus'];
    // const carObject = { name: 'kalle', fun: 'cards'}
    // carObject.name    alt. carObject.fun
    return(
      <ul>
        {cars.map((value, index) => {
          return(
            <li key={index}>{value}</li>
          )
        })}
      </ul>
    )
  }

  mapDataStructure = () => {
    const carObject = { name: 'kalle', fun: 'cards', animal: 'dog'}

    const array = new Map()
    array.set(carObject.name, carObject)
    console.log(array)
    // finns key?
    if(array.has(carObject.name)){
      // alert('finns')
    }else{
      //Add
    }
    console.log([...array]);
    [...array].map((value, index) => {
      return(
        <div key={index}>{value[1].fun}</div>
      )
    })
  }

  getTotalNumber = (total) => {
    console.log(total)
    if(localStorage.getItem('total')){
      localStorage.setItem('total', parseInt(localStorage.getItem('total')) + total)
    }else{
      localStorage.setItem('total', total)
    }
    
    window.location.reload()
  }
  
  render(){
    const item = localStorage.getItem('total') ? localStorage.getItem('total') : 0;
    return(
      <div className="divBody">
        <h1>{item}</h1>
        {/* {this.mapDataStructure()}
        {this.mapIterator()} */}
        <Form hello='hello' getTotalNumber={this.getTotalNumber}/>
        {/* {this.myName}
        {myName}
        {this.welcomeMessage}
        {this.displayMyName()} */}
      </div>
    )
  }
}

export default App;