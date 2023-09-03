import './popup.css'
import PopupWrapper from './PopupWrapper'
function Popup({ isValid, textForh2 }) {
  function onClickHandler(e) {
    e.stopPropagation()
    isValid(false)
  }
  return (
    <>
      <PopupWrapper onClickHandler={onClickHandler} />
      <div className="popupBlock">
        <h2>Incorrect input</h2>
        <h3>{textForh2}</h3>
        <button type="button" onClick={(e) => onClickHandler(e)}>Close</button>
      </div>
    </>
  )
}
export default Popup