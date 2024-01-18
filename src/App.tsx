import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import Projects from './components/Projects'
import SmartCharging from './components/SmartCharging'

function App() {
    //using state to identify the current page the user is browser
    const [ currentPage, setCurrentPage ] = useState<string>('home')
    
    return (
        <>
            <NavBar 
                page='N/A'
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Hero />
            <About />
            <SmartCharging />
            <Products />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default App
