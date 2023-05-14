const Clothes = (props) => {
  return (
    <div className="clothes">
      <img src={props.clothes.image} alt="" id="photo" />
      <div className="clothes-info">
        <h5>{props.clothes.color}</h5>
        <h3>{props.clothes.name}</h3>
        <h4>{props.clothes.price}</h4>
        <button class="button-hover-addcart button">
          <span>quickview</span>
          <i class="fa fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  )
}

export default Clothes
