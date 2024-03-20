import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import PageNotFound from './pages/404'
import ProductsPage from './pages/ProductsPage'

function App() {
    //using state to identify the current page the user is browser
    const [ currentPage, setCurrentPage ] = useState<string>('home')
    
    return (
        <>
            <BrowserRouter>
                <NavBar 
                    page='N/A'
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App
