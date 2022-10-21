import React from "react";
import Hide from "./components/hide/hide";



class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        hour: 0,
        minutes: 0,
        seconds: 0,
        paus: true,
      }
    }

  startcount =() => {
    const setIntervalId = setInterval(() => {console.log(this.state.paus)
      this.count()
      this.setState(
        
          {seconds: this.state.seconds + 1}
          
      )
    }, 1000)
    
    return () => clearInterval({setIntervalId})
  }

  
  pausCounting = () => {
    this.setState({paus: !this.state.paus})
    
    }
    
  count = () => {
    if(this.state.seconds >= 59){
      this.setState({seconds: this.state.seconds = 0, minutes: this.state.minutes +1})
      if(this.state.minutes >= 59){
        this.setState({seconds: this.state.seconds = 0, minutes: this.state.minutes = 0, hour: this.state.hour + 1})
        if(this.state.hour >= 23){
          this.setState({seconds: this.state.seconds = 0, minutes: this.state.minutes = 0, hour: this.state.hour = 0})
        }
      }
    }
  }
 
  resetTimer = () => {
    this.setState(
      {hour: 0, minutes: 0, seconds: 0, paus: true}
    )
  }

  componentDidMount(){
    localStorage.setItem('myState', JSON.stringify(this.state))
  }
  componentWillUnmount(){
    localStorage.removeItem('myState')
  }

  render(){
    return(
      <div className="divBody">
        
        <h1>{this.state.hour}:{this.state.minutes}:{this.state.seconds}</h1>
        <button onClick={this.startcount}>Start</button>
        <div>
          {this.state.paus && <Hide />}
          <button onClick={this.pausCounting}>Paus</button>
        </div>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    )
  }
}

export default App;