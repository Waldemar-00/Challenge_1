import './input.css'
function Input({ type, id, value, name, onInput }) {
  return (
    <>
      <label htmlFor={id} className="label">{id}</label>
      <input
        id={id}
        className="userInput"
        type={type}
        name={name}
        value={value}
        onInput={(e) => onInput(e)}
        />
    </>
  )
}
export default Input