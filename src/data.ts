import HeroImage1 from '/assets/hero-car.jpg'
import HeroImage2 from '/assets/EVCharger.jpg'
import HeroImage3 from '/assets/HeroImage3.jpg'

//array with images used in HeroSlider component
type imagesProps = {
    image: string,
    title: string,
    subtitle: string
}

export const mediaImages: imagesProps[] = [
    {
        image: HeroImage1,
        title: 'Charge Forward',
        subtitle: 'Transforming the Way You Charge, Drive, and Thrive' 
    },
    {
        image: HeroImage2,
        title: 'Drive Electric, Charge Exceptional',
        subtitle: 'Fueling Your EV Journey with Unmatched Efficiency and Reliability' 
    },
    {
        image: HeroImage3,
        title: 'Everywhere You Go, We Charge',
        subtitle: 'Connecting You to a Nationwide Network of Charging Excellence' 
    }
]

/* testimonial placeholders */
export type Review = {
    name: string,
    position: string,
    image: string,
    review: string
}

/* array containing all reviews to be displayed */
export const CustomerReviews: Review[] =[
    {
        name: 'ABC',
        position: 'Executive',
        image: '/assets/AAA.png',
        review: 'Best company in the world!'
    },
    {
        name: 'XYZ',
        position: 'Executive',
        image: '/assets/AAA.png',
        review: 'Absolutley the best service in the industry!'
    },
    {
        name: '123',
        position: 'Executive',
        image: '/assets/AAA.png',
        review: 'Kings of the industry!'
    }
]
