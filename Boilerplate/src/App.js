import {useState} from "react"
import StopWatch from "./components/stopWatch/stopWatch";

const App = () => {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [hours, setHours] = useState(0);
  const [interval, setIntervalMethod] = useState(null);

  const startCount = () => {
    setIntervalMethod ( 
      setInterval(() => {
        setSeconds (seconds = seconds + 1)
        if(seconds === 60){
          setMinutes(minutes = minutes + 1)
          setSeconds(0)
            if(minutes === 59 && seconds === 59){
            setMinutes(0)
            setHours(hours = hours + 1)
          }
        }
        
      }, 1000))
  }

  const pausCounting = () => {
    clearInterval(interval)
    }
 
  const resetTimer = () => {
    setSeconds(0)
    setMinutes(0)
    setHours(0)
    clearInterval(interval)
  }

  return(
    <div className="divBody">
      <StopWatch
        start = {startCount}
        pause = {pausCounting}
        reset = {resetTimer}
        seconds = {seconds}
        minutes = {minutes}
        hours = {hours}
      />
    </div>
  )

}

export default App;