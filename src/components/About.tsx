import EVCharging from '/public/assets/EV charging.jpg'

function About() {
    return (
        <section
            id="about"
            className="h-screen flex items-center justify-center bg-cover w-full"
        >
            <div className='w-4/5 flex items-center'>
                {/* section tagline/heading */}
                <span className="text-5xl mt-10">Future proof your home or business with our tailored EV charging solutions today.</span>

                {/* image */}
                <img 
                    src={EVCharging} 
                    alt="EV charging at plugin point" 
                    className='w-1/2 rounded-lg'    
                />
            </div>
        </section>
    )
}

export default About