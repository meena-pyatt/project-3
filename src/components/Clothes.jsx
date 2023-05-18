import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Clothes = (props) => {
  return (
    <div className="clothes">
      <img src={props.clothes.image} alt="" id="photo" />
      <div className="clothes-info">
        <h5>
          <span
            className="dot"
            style={{ backgroundColor: props.clothes.color }}
          ></span>
        </h5>
        <h3>{props.clothes.name}</h3>
        <h4>{props.clothes.price}</h4>
        <button className="quickview">
          <span>quickview</span>
        </button>
      </div>
      {/* <div className="favorite">
        <FontAwesomeIcon icon={faHeart} />
      </div> */}
    </div>
  )
}

export default Clothes
