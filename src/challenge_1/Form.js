import Input from './Input'
import './form.css'
import FormButton from './FormButton'
import List from './List'
import { useState } from 'react'
function Form() {
  const [name, setName] = useState('enter user name')
  const [age, setAge] = useState('enter user age')
  const [formData, setFormData] = useState([])
  function focusHandlerName() {
    setName('')
  }
  function focusHandlerAge() {
    setAge('')
  }
  function changeNameHandler(e) {
    setName(e.target.value)
  }
  function changeAgeHandler(e) {
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
      <form className="userForm" onSubmit={(e) => getFormData(e)}>
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
      <List formData={formData}/>
    </>
  )
}
export default Form 