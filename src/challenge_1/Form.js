import Input from './Input'
import './form.css'
import FormButton from './FormButton'
import List from './List'
import { useState } from 'react'
function Form({ isValid }) {
  const [name, setName] = useState('enter user name')
  const [age, setAge] = useState('enter user age')
  const [formData, setFormData] = useState([])
  const [invalid, setInvalid] = useState(false)
  function focusHandlerName() {
    setName('')
    setInvalid(true)
  }
  function focusHandlerAge() {
    setAge('')
    setInvalid(true)
  }
  function onIsValid() {
    isValid(invalid)
  }
  function changeNameHandler(e) {
    if (name.trim().length > 1) {
      setInvalid(false)
    }
    setName(e.target.value)
  }
  function changeAgeHandler(e) {
    if (age.trim().length > 1) {
      setInvalid(false)
    }
    setAge(e.target.value)
  }
  function getFormData(e) {
    e.preventDefault()
    setFormData(formData => {
      return [...formData, { userName: name, userAge: age }]
    })
    setName('enter user name')
    setAge('enter user age')
  }
  return (
    <>
      <form className="userForm" onSubmit={(e) => {
        getFormData(e)
        onIsValid()
      }}>
        <Input
          type='text'
          name='name'
          value={name}
          onChange={changeNameHandler}
          onClick={focusHandlerName}
        />
        <Input
          type='text'
          name='age'
          value={age}
          onChange={changeAgeHandler}
          onClick={focusHandlerAge}
        />
        <FormButton type='submit'/>
      </form>
      {
        !invalid ? <List formData={formData} /> : null
      }
    </>
  )
}
export default Form 