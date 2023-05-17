import './App.css'
import { useState, useEffect } from 'react'
import data from './clothes.json'
import Clothes from './components/Clothes'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'

const App = () => {
  const [products, setProducts] = useState([])
  const [selection, setSelection] = useState(null)

  useEffect(() => {
    setProducts(data.clothes)
  }, [])

  const changeSelection = (category) => {
    setSelection(category)
  }

  return (
    <div>
      <Navigation />
      <div className="center">
        <Sidebar changeSelection={changeSelection} />
        <main>
          {products.map((clothes, index) => (
            <Clothes clothes={clothes} key={clothes.name} />
          ))}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
