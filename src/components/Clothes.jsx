const Clothes = (props) => {
  return (
    <div className="clothes">
      <img src={props.clothes.image} alt="" id="photo" />
      <div className="clothes-info">
        <h2>{props.clothes.name}</h2>
        <h4>{props.clothes.price}</h4>
      </div>
    </div>
  )
}

export default Clothes
