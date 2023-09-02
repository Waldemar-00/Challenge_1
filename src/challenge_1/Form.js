import Input from './Input'
import './form.css'
import FormButton from './FormButton'
import {useState} from 'react'
function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  function changeNameHandler(e) {
    setName(e.target.value)
  }
  function changeAgeHandler(e) {
    setAge(e.target.value)
  }
  return (
    <form className="userForm">
      <Input
        type='text'
        name='name'
        value={name}
        onCnange={(e) => changeNameHandler(e)}
      />
      <Input
        type='number'
        name='age'
        value={age}
        onCnange={(e) => changeAgeHandler(e)}
      />
      <FormButton />
    </form>
  )
}
export default Form 