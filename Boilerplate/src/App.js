import Form from "./components/form/form";
import {useState} from 'react'
import RenderData from "./components/renderData/renderData";
import Button from "./components/button/button";
import Add from "./components/add/add";

const App = (props) => {

  const [list, setList] = useState([])
  // const [show, setShow] = useState(true)
  
  const addNewUser = (formObject) =>{
    setList(list => [...list, formObject])
  }

  const click = () => {
    alert('jahaja')
  }

  return(
    <div className="divBody">
      <Add/>
      <Form addNewUser={addNewUser}/>
      <RenderData list={list}/>
      <Button btnText = 'Jag är knapp' click={click}/>
      <Button btnText = 'Jag är knapp två' click={click}/>
      <Button btnText = 'Jag är knapp tre' click={click}/>

    </div>
  )
}

export default App;