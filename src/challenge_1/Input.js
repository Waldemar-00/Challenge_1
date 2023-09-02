import './input.css'
function Input({ type, value, name, onChange }) {
  return (
    <input
      className="userInput"
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
    />
  )
}
export default Input