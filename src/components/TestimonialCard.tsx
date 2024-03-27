import { Review } from "./Testimonials"

function TestimonialCard({ name, position, image, review }: Review) {
    return (
        <div>
            <img 
                src={image} 
                alt='Brand logo' 
                className="w-72 h-56"
            />

            <p className="font-bold text-2xl text-center">{name}, {position}</p>

            <p className="font-semibold text-xl text-center">{review}</p>
        </div>
    )
}

export default TestimonialCard