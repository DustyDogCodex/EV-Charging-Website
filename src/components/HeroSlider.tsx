import { mediaImages } from "../data"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { wrap } from "framer-motion"

//variants object for animation
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

/* The less distance a user has swiped, the more velocity they need to register as a swipe */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

function HeroSlider() {
    const [[ page, direction ], setPage ] = useState([0, 0])

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, mediaImages.length, page)

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <section
            id="gallery"
            className="w-full min-h-screen flex justify-center items-center bg-black"
        >
            <motion.div
                className="relative h-full w-full overflow-hidden" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img 
                        className="object-cover absolute w-full h-full" 
                        alt="Image slider" 
                        key={page}
                        src={mediaImages[imageIndex].image} 
                        variants={variants}  
                        initial="enter"
                        animate="center"
                        exit='exit'
                        custom={direction}
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1)
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1)
                            }
                            return e
                        }}
                    />
                </AnimatePresence>

                {/* button to go left */}
                <div
                    className="absolute top-[50%] z-20 left-20 cursor-pointer p-2 flex items-center rounded-full bg-black/70 hover:bg-indigo-600 transition duration-300"
                >
                    <FontAwesomeIcon 
                        icon={faChevronLeft} 
                        style={{color: "white", height:'30px', width:'30px'}} 
                        onClick={() => paginate(1)}
                    />
                </div> 

                {/* button to go right */} 
                <div
                    className="absolute top-[50%] z-20 right-20 cursor-pointer p-2 flex items-center rounded-full bg-black/70 hover:bg-indigo-600 transition duration-300"
                >
                    <FontAwesomeIcon 
                        icon={faChevronRight} 
                        style={{color: "white", height:'30px', width:'30px'}}
                        onClick={() => paginate(-1)}
                    />
                </div>  
                
                {/* Div containing title and subtitle to go with image */}
                <div
                    className="absolute top-[50%] z-20 left-[20%] cursor-pointer p-2 flex flex-col items-start transition duration-300"
                >
                    <span className="text-white bg-green-400 text-3xl mb-3 p-2 rounded-lg">{mediaImages[imageIndex].title}</span>
                    <span className="text-white bg-purple-400 text-xl ml-4 p-2 rounded-lg">{mediaImages[imageIndex].subtitle}</span>
                </div> 
            </motion.div>
        </section>
    )
}

export default HeroSlider