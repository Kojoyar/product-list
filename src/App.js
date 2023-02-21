import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct'
import Edit from './components/Edit/Edit'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList'
import ProductContextProvider from './productContext'

function App() {
  return (
    <>
    <Navbar/>
    <ProductContextProvider>
    <Routes>
      <Route path='/' element={<><AddProduct/> <ProductList/> </>} />
      <Route path='edit/:id' element={<Edit/>} />
    </Routes>
    </ProductContextProvider>
    <Footer/>
    </>
  )
}

export default App