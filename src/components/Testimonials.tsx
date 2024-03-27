import TestimonialCard from "./TestimonialCard"

/* testimonial placeholders */
export type Review = {
    name: string,
    position: string,
    image: string,
    review: string
}

/* array containing all reviews to be displayed */
const CustomerReviews: Review[] =[
    {
        name: 'ABC',
        position: 'Executive',
        image: '/assets/AAA.png',
        review: 'Best company in the world!'
    }
]

function Testimonials() {
    return (
        <div className="w-full flex items-center justify-center my-20">
            <div className="container m-5">
                <h3 className="text-4xl text-center mb-10">What our customers have to say</h3>

                {/* displaying customer testimonials section */}
                <div className="flex items-center justify-center">
                    {CustomerReviews.map((review, index) => <TestimonialCard key={index} name={review.name} position={review.position} image={review.image} review={review.review} />)}
                </div>
            </div>
        </div>
    )
}

export default Testimonials