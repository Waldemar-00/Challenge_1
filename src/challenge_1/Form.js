import Input from './Input'
import './form.css'
import FormButton from './FormButton'
import {useState} from 'react'
function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [formData, setFormData] = useState([])
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
    setName('')
    setAge(0)
  }
  return (
    <form className="userForm" onSubmit={(e) => getFormData(e)}>
      <Input
        type='text'
        name='name'
        value={name}
        onChange={changeNameHandler}
      />
      <Input
        type='number'
        name='age'
        value={age}
        onChange={changeAgeHandler}
      />
      <FormButton type='submit'/>
    </form>
  )
}
export default Form 