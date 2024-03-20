import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Products from '../components/Products'
import Projects from '../components/Projects'
import SmartCharging from '../components/SmartCharging'

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <SmartCharging />
            <Products />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home