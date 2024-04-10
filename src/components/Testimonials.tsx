import TestimonialSlider from "./TestimonialSlider"

function Testimonials() {
    return (
        <div className="w-full h-[600px] bg-green-500 flex items-center justify-center py-20">
            <div className="container m-5">
                <h3 className="text-4xl text-center mb-10">What our customers have to say</h3>

                {/* displaying customer testimonials section */}
                <TestimonialSlider />
            </div>
        </div>
    )
}

export default Testimonials