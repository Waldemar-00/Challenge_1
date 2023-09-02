import './li.css'
function Li({ name, age }) {
  return (
    <li className='userLi'>{name} - {age}</li>
  )
}
export default Li