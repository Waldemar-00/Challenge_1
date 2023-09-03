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
  function isIsValid() {
    isValid(invalid)
  }
  function changeNameHandler(e) {
    setName(e.target.value)
  }
  function changeAgeHandler(e) {
    setAge(e.target.value)
  }
  function checkInputs() {
    if (name.trim().length < 1 || age.trim().length < 1) {
      setInvalid(true)
    } else {
      setInvalid(false)
    }
  }
  function getFormData(e) {
    e.preventDefault()
    if (invalid) return
    setFormData(formData => {
      return [...formData, { userName: name, userAge: age,  }]
    })
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