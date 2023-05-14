const Navigation = () => {
  return (
    <div class="header">
      <img src="hangers.png" alt="" width="120px"></img>
      <div class="header-right">
        <a class="active" href="#home">
          Women's
        </a>
        <a href="#contact">Men's</a>
        <a href="#about">Sale</a>
        <input type="text" placeholder="Search.."></input>
      </div>
    </div>
  )
}

export default Navigation
