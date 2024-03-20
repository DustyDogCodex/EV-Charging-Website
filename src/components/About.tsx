import EVCharging from '/public/assets/EV charging.jpg'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"

function About() {
    return (
        <section
            id="about"
            className="h-screen flex items-center justify-center bg-cover w-full"
        >
            <div className='w-4/5 flex items-center'>
                {/* section tagline/heading */}
                <motion.div 
                    className="text-5xl mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75, delay: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className='mb-5'>Future proof your home or business with our tailored turnkey solutions for EV charging today.</p>

                    <Link to='about' className='bg-green-500 mt-8 px-8 py-2 rounded-lg text-white'>
                        Learn More
                    </Link>
                </motion.div>

                {/* image */}
                <motion.img 
                    src={EVCharging} 
                    alt="EV charging at plugin point" 
                    className='w-1/2 rounded-lg'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75, delay: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}    
                />
            </div>
        </section>
    )
}

export default About