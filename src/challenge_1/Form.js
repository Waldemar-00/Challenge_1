import Input from './Input'
import './form.css'
import FormButton from './FormButton'
import {useState} from 'react'
function Form() {
  const [name, setName] = useState('user name')
  const [age, setAge] = useState(100)
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