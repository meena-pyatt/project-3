const Navigation = () => {
  return (
    <div class="header">
      <a href="#default" class="logo">
        CompanyLogo
      </a>
      <div class="header-right">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <input type="text" placeholder="Search.."></input>
      </div>
    </div>
  )
}

export default Navigation
