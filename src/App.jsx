import './App.css'
import products from './clothes.json'
import Clothes from './components/Clothes'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <main>
        <div>
          <Sidebar />
        </div>
        {products.clothes.map((clothes, index) => (
          <Clothes clothes={clothes} key={clothes.name} />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
