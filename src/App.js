import './App.css' 
import Form from './challenge_1/Form'
import Popup from './challenge_1/popup/Popup'
import {useState} from 'react'
function App() {
  const [popUp, setPopUp] = useState('')
  function isValid(invalid) {
    setPopUp(invalid)
  }
  return (
    <div className="App">
      <h1>Hello Challenge number 1</h1>
      <Form isValid={isValid}/>
      {
        popUp ? <Popup isValid={isValid}/> : null
      }
    </div>
  ) 
}

export default App 
