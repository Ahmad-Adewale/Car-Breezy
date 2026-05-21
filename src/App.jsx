import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import ProductListPage from './pages/ProductListPage'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
import Ticker from './components/Ticker'

function App() {
  
  return (
    <>
      <Nav />
        <Routes>
          {/* Main product */}
          <Route path="/" element={<Home />} />
          <Route path="/products/:section" element={<ProductListPage />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>

        <Footer/>
        <Ticker/>
    </>
    
  )
}

export default App
