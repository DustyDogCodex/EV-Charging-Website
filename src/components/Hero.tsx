import { motion } from "framer-motion"

function Hero() {
    return (
        <section
            id="home"
            className="h-screen flex flex-col items-center bg-hero-bg-img bg-cover"
        >
            <motion.div
                className="text-3xl md:text-6xl mt-40 md:mt-80 text-center text-white flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <span>The Future</span>
                <span>Is Electric.</span> 
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
                The leaders in commercial <span className="font-bold hover:bg-gradient-to-r from-red-500 via-orange-400 to-amber-500 hover:bg-clip-text hover:text-transparent transition duration-500">EV Charging solutions.</span> 
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
                <input 
                    type="text" 
                    placeholder="Search"
                    className="rounded-full w-full pl-6 pr-18 py-4 mx-5 bg-slate-300 outline-none text-white text-lg placeholder-white"
                />
                {/* <img 
                    src={searchIcon} 
                    alt="search icon" 
                    className="h-10 w-10 absolute right-10 cursor-pointer"
                /> */}
            </motion.div>  
            
            {/* this div adds a white smoke rising from the bottom effect which looks reallllllly coooooooooooooool */}
            <div className="absolute h-[75px] xs:h-[200px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
        </section>
    )
}

export default Hero