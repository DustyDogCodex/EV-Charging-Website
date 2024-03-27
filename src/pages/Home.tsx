import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Products from '../components/Products'
import Projects from '../components/Projects'
import SmartCharging from '../components/SmartCharging'
import Testimonials from '../components/Testimonials'

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <SmartCharging />
            <Products />
            <Testimonials />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home