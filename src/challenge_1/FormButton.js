import './formButton.css'
function Button({ type, text = 'add user', checkInputs }) {
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
export default Button 