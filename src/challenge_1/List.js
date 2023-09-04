import Li from './Li'
import './list.css'
import {v4} from 'uuid'
function List({formData}) {
  return (
    <ul className="userList">
      {
        formData.map(obj => {
          return obj.name ? <Li
            key={v4()}
            name={obj.name}
            age={obj.age}
          /> : null
        })
      }
    </ul>
  )
}
export default List