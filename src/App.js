import './App.css' 
import Form from './challenge_1/Form'
import Popup from './challenge_1/popup/Popup'
import {useState} from 'react'
function App() {
  const [popUp, setPopUp] = useState('')
  const [text, setText] = useState('')
  function isValid(invalid, textForh2) {
    setText(textForh2)
    setPopUp(invalid)
  }
  return (
    <div className="App">
      <h1>Hello Challenge number 1</h1>
      <Form isValid={isValid}/>
      {
        popUp ? <Popup textForh2={text} isValid={isValid}/> : null
      }
    </div>
  ) 
}

export default App 
