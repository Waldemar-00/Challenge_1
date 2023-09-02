import Li from './Li'
import './list.css'
import {v4} from 'uuid'
function List({formData}) {
  return (
    <ul className="userList">
      {
        formData.map(obj => {
          return <Li
            key={v4()}
            name={obj.userName}
            age={obj.userAge}
          />
        })
      }
    </ul>
  )
}
export default List