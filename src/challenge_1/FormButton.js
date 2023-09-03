import './formButton.css'
function FormButton({ type, text = 'add user', checkInputs }) {
  return (
    <button
      type={type}
      className="formButton"
      onClick={checkInputs}
    >
      {text}
    </button>
  )
}
export default FormButton 