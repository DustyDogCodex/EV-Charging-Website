function Footer() {
    return (
        <footer
            className="w-full h-full flex flex-col md:flex-row justify-center bg-footer-bg py-8 px-5"
        >
            {/* support/links/address section */}
            <div
                className="w-4/5 flex flex-col items-center mt-3"
            >
                {/* support and links section */}
                <div
                    className="flex items-center gap-20"
                >
                    <div className="w-1/2 font-semibold text-2xl">
                        Experts in Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae possimus magnam adipisci molestias animi, blanditiis velit exercitationem a accusantium sequi.
                    </div>

                    <div
                        className="flex flex-col items-center"
                    >
                        <span className="text-lg font-bold mb-5">Support</span>
                        <span>About Us</span>
                        <span>Careers</span>
                        <span>Blog</span>
                    </div>

                    <div
                        className="flex flex-col items-center"
                    >
                        <span className="text-lg font-bold mb-5">Links</span>
                        <span>Payments & Taxes</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>

                    {/* address on the bottom */}
                    <div
                        className="flex flex-col items-center text-center my-3"
                    >
                        <span className="text-lg font-bold">Address</span>
                        <span>1234 Real Street</span>
                        <span>Real City</span>
                        <span>Real State, 00000</span>
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col items-center justify-center"
            >
                <span className="pt-2 border-t-2 text-center border-white">Created with ❤️ by &copy; 2024 Varun Malaviya</span>
            </div>
        </footer>
    )
}

export default Footer