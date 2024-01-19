import Masonry from '@mui/lab/Masonry'
import Car1 from '/public/assets/Car1.jpg'
import Car2 from '/public/assets/Car2.jpg'
import Car3 from '/public/assets/Car3.jpg'
import Car4 from '/public/assets/Car4.jpg'

function Projects() {
    /* images array with tags */
    const images = [
        {
            image: Car1,
            tag: 'Earth'
        },
        {
            image: Car2,
            tag: 'Space'
        },
        {
            image: Car3,
            tag: 'Space'
        },
        {
            image: Car4,
            tag: 'Space'
        }
    ]

    //determine screensize
    /* const aboveSmallScreens = useMediaQuery('(min-width: 768px)') */

    return (
        <section 
            id='projects'
            className="flex min-h-screen flex-col items-center justify-between bg-black"
        >
            <div className="container pt-16 text-white flex flex-col items-center">
                {/* section heading */}
                <h2 className='text-4xl'>Our Projects</h2>

                {/* Masonry grid for images */}
                <div className="overflow-auto w-full p-2 mt-5">
                    <Masonry columns={ 3 } spacing={ 2 }>
                        {images.map((pic, index) => 
                            <img 
                                key={index} 
                                src={pic.image}
                                alt="image"
                            />
                        )}       
                    </Masonry>
                </div>
            </div>
        </section>
    )
}

export default Projects