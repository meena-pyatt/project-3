const Navigation = () => {
  return (
    <div className="header">
      <img src="hangers.png" alt="" width="120px"></img>
      <div className="header-right">
        <a className="active" href="#home">
          Women's
        </a>
        <a href="#contact">Men's</a>
        <a href="#about">Sale</a>
        <input type="text" placeholder="Search"></input>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navigation
