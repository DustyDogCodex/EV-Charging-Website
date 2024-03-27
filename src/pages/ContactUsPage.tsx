function ContactUsPage() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-contact-bg">
            <div className="container flex flex-col justify-center items-center">
                <h2 className="text-4xl text-center mb-12">Contact Us!</h2>
            
                <p className="text-center text-xl">Curious about our offerings and products? Would you like to learn more? Feel free to send us a message along with your name and an email address below. We will get back to you as soon as possible!</p>

                {/* contact us form */}
                <form action="" className="flex flex-col justify-center mt-12 w-4/5 border">
                    <label htmlFor="" className="flex items-center justify-around my-5">
                        Name: <input type="text" className="p-2 rounded-2xl w-2/5"></input>
                    </label>

                    <label htmlFor="" className="flex items-center justify-around my-5">
                        Email: <input type="email" className="p-2 rounded-2xl w-2/5"></input>
                    </label>

                    <label htmlFor="" className="flex items-center justify-around my-5">
                        Message: <textarea rows={6} className="p-2 rounded-2xl w-2/5" />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default ContactUsPage