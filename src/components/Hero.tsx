import { motion } from "framer-motion"
import HeroSlider from "./HeroSlider"

function Hero() {
    return (
        <section
            id="home"
            className="h-screen flex flex-col justify-center items-center bg-hero-bg-img bg-cover"
        >
            <HeroSlider />
            {/* <motion.div
                className="mt-40 md:mt-80 font-semibold flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <span className="text-3xl md:text-6xl text-white">The Future</span>
                <span className="text-5xl md:text-8xl text-amber-400">Is Electric.</span> 
            </motion.div> 

            <motion.div
                className="text-lg md:text-2xl mt-10 text-center text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75, delay: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                The leaders in commercial <span className="font-bold hover:bg-gradient-to-r from-red-500 via-orange-400 to-amber-500 hover:bg-clip-text hover:text-transparent transition duration-500">EV charging solutions.</span> 
            </motion.div>       

            <motion.div
                className="relative text-2xl mt-20 w-full md:w-2/5 text-center text-white flex items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75, delay: 1 }}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div className="w-4/5 bg-white hover:bg-amber-400 transition duration-300 text-black text-3xl py-5 rounded-full">
                    Our Solutions
                </div>
            </motion.div>  */}

            {/* this div adds a white smoke rising from the bottom effect which looks reallllllly coooooooooooooool */}
            <div className="absolute z-30 h-[75px] xs:h-[200px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
        </section>
    )
}

export default Hero