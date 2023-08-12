import React from 'react'
import './App.css'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import ProductsPage from './pages/productsPage'
import AboutPage from './pages/aboutPage'
import CartPage from './pages/cartPage'
import SingInPage from './pages/singInPage'
import SignUpPage from './pages/singnUpPage'
import ProfilePage from './pages/profilePage'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/our-products' element={<ProductsPage />}></Route>
        <Route path='/about-us' element={<AboutPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/sign-in' element={<SingInPage />}></Route>
        <Route path='/sign-up' element={<SignUpPage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
