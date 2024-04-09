import HeroSlider from "./HeroSlider"

function Hero() {
    return (
        <section
            id="home"
            className="h-screen flex flex-col justify-center items-center bg-hero-bg-img bg-cover"
        >
            <HeroSlider />

            {/* this div adds a white smoke rising from the bottom effect which looks reallllllly coooooooooooooool */}
            <div className="absolute z-30 h-[75px] xs:h-[200px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
        </section>
    )
}

export default Hero