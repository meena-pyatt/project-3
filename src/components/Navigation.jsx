import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  )
}

export default Navigation
