import { Link } from "react-router-dom"

function Contact() {
    return (
        <section 
            id="contact"
            className="h-screen bg-contact-bg py-12 flex flex-col items-center justify-start"    
        >
            {/* Contact us part of the section */}
            <div className="container flex flex-col">
                {/* contact section heading */}
                <span className="text-6xl">
                    Ready to start your electric future?
                </span>

                <Link
                    to={'/contact'} 
                    className="rounded-full bg-white w-1/3 mt-16 text-4xl text-center p-2"
                >
                    Contact Us
                </Link>
            </div>

            {/* Link to careers page */}
            <div className="container flex flex-col">
                {/* contact section heading */}
                <span className="text-6xl">
                    Looking for an Electrifying Career? Join Our Team!
                </span>

                <Link
                    to={'/careers'} 
                    className="rounded-full bg-white w-1/3 mt-16 text-4xl text-center p-2"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    )
}

export default Contact