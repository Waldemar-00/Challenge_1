import './popupWrapper.css'
function PopupWrapper({onClickHandler }) {
  return (
    <div className="PopupWrapper" onClick={onClickHandler}></div>
  )
}
export default PopupWrapper