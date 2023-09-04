import './form.css'
import Input from './Input'
import FormButton from './FormButton'
import List from './List'
import { useState } from 'react'
function Form({ isValid }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [formData, setFormData] = useState([])
  const [invalid, setInvalid] = useState(false)
  const [textForh2, setTextForh2] = useState('These fields can not be empty.')
  function isIsValid() {
    isValid(invalid, textForh2)
  }
  function changeNameHandler(e) {
    setName(e.target.value)
  }
  function changeAgeHandler(e) {
    setAge(e.target.value)
  }
  function checkInputs() {
    if (age < 0 || age === '0') {
      setTextForh2('Field of age can not be less zero or equal to zero.')
      setInvalid(true)
    }
    else if (name.trim().length < 1 || age.trim().length < 1) {
      setInvalid(true)
    } else {
      setInvalid(false)
      setTextForh2('These fields can not be empty.')
    }
  }
  function getFormData(e) {
    e.preventDefault()
    if (invalid) {
      setTextForh2('These fields can not be empty.')
      return
    }
    setFormData(formData => {
      return [...formData, { userName: name, userAge: age,  }]
    })
    setName('')
    setAge('')
    
  }
  return (
    <>
      <form className="userForm" onSubmit={(e) => {
        getFormData(e)
        isIsValid()
      }}>
        <Input
          id='enter user name'
          type='text'
          name='name'
          value={name}
          onInput={changeNameHandler}
        />
        <Input
          id='enter user age'
          type='number'
          name='age'
          value={age}
          onInput={changeAgeHandler}
        />
        <FormButton type='submit' checkInputs={checkInputs}/>
      </form>
      <List formData={formData}/>
    </>
  )
}
export default Form 