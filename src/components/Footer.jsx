import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="footer">
      <img src="" alt="" id="photo" />
      <div className="footer-info">
        <footer>
          <h2>Hanger's Clothing Store</h2>
          <ul>
            <h3>About Us</h3>
            <li>
              <a href="#footer">Careers</a>
            </li>
            <li>
              <a href="#footer">Accessibility</a>
            </li>
            <li>
              <a href="#footer">Inclusion & Diversity</a>
            </li>
            <li>
              <a href="#footer">Press Room</a>
            </li>
          </ul>
          <ul>
            <h3>Help</h3>
            <li>
              <a href="#footer">Customer Help</a>
            </li>
            <li>
              <a href="#footer">Order Help</a>
            </li>
            <li>
              <a href="#footer">Returns</a>
            </li>
            <li>
              <a href="#footer">Shipping</a>
            </li>
          </ul>
          <div className="newsletter">
            <h3>Subscribe</h3>
            <input type="text" placeholder="Email Address"></input>
            <button>Join</button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
