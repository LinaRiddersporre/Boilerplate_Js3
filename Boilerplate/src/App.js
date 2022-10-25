import Form from "./components/form/form";
import {useState} from 'react'
import RenderData from "./components/renderData/renderData";

const App = (props) => {

  const [list, setList] = useState([])
  
  const addNewUser = (formObject) =>{
    setList(list => [...list, formObject])
  }
  return(
    <div className="divBody">
      <Form addNewUser={addNewUser}/>
      <RenderData list={list}/>
    </div>
  )
}

export default App;