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
        title: 'Title 1',
        subtitle: 'Subtitle 1' 
    },
    {
        image: HeroImage2,
        title: 'Title 2',
        subtitle: 'Subtitle 2' 
    },
    {
        image: HeroImage3,
        title: 'Title 3',
        subtitle: 'Subtitle 3' 
    }
]

