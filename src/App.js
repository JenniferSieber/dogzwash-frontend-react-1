import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import CustomNavbar from './components/Navbar'
import NavigationBar from './components/NavigationBar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'
import StorePage from './components/StorePage'
import ShoppingCart from './components/ShoppingCart'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
