import './popup.css'
function Popup({ isValid, textForh2 }) {
  function onClickHandler(e) {
    e.stopPropagation()
    isValid(false)
  }
  return(
    <div className="popupForForm" onClick={(e) => onClickHandler(e)} >
      <div className="popupBlock">
        <h2>Incorrect input</h2>
        <h3>{textForh2}</h3>
        <button type="button" onClick={(e) => onClickHandler(e)}>Close</button>
      </div>
    </div>
  )
}
export default Popup