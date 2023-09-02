import './input.css'
function Input({ type, value, name, onChange, onClick }) {
  return (
    <input
      className="userInput"
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      onClick={(e) => onClick(e)}
    />
  )
}
export default Input