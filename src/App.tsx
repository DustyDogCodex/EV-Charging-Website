import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'

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
            <Footer />
        </>
    )
}

export default App
