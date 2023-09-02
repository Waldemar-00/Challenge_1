import Li from './Li'
import './list.css'
function List({formData}) {
  return (
    <ul className="userList">
      {
        formData.map(obj => {
          return <Li
            name={obj.userName}
            age={obj.userAge}
          />
        })
      }
    </ul>
  )
}
export default List