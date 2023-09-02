import './formButton.css'
function FormButton({type, text='add user'}) {
  return (
    <button type={type} className="formButton">{text}</button>
  )
}
export default FormButton 