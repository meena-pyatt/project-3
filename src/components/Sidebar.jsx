const Sidebar = (props) => {
  return (
    <div className="sidenav">
      <div
        className="link"
        onClick={() => props.changeSelection('New Arrivals')}
      >
        New Arrivals
      </div>
      <div className="link" onClick={() => props.changeSelection('Tops')}>
        Tops
      </div>
      <div className="link" onClick={() => props.changeSelection('Pants')}>
        Pants
      </div>
      <div className="link" onClick={() => props.changeSelection('Skirts')}>
        Skirts
      </div>
      <div className="link" onClick={() => props.changeSelection('Dresses')}>
        Dresses
      </div>
      <div className="link" onClick={() => props.changeSelection('Outerwear')}>
        Outerwear
      </div>
    </div>
  )
}

export default Sidebar
