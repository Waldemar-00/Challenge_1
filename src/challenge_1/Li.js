import './li.css'
function Li({ name, age }) {
  return (
    <li className='userLi'>{name} - {age} years old</li>
  )
}
export default Li