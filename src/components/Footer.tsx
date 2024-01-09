function Footer() {
    return (
        <footer
            className="w-full h-full flex flex-col md:flex-row justify-center bg-footer-bg text-white py-8 px-5"
        >
            <div
                className="flex flex-col md:flex-row items-center justify-center lg:w-3/5"
            >
            {/* newsletter section */}
            <div
                className="w-full flex flex-col items-center justify-center"
            >
                <h3 className="text-2xl my-5">Newsletter</h3>
                <div
                    className='w-full lg:w-4/5 relative flex items-center justify-center'
                >
                    <input 
                        type="text" 
                        placeholder="Email"
                        className="rounded-full w-full px-8 py-4 bg-slate-300 outline-none text-lg placeholder-white"
                    />
                    <button 
                        className="bg-nav-hover text-lg px-4 py-2 rounded-full absolute top-2 right-2"
                    >
                        Subscribe
                    </button>
                </div>
            </div>

            {/* support/links/address section */}
            <div
                className="w-full flex flex-col items-center mt-3"
            >
                {/* support and links section */}
                <div
                    className="flex items-center gap-20"
                >
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
                </div>
            </div>

            <div
                className="flex flex-col w-2/3 items-center justify-center"
            >
                {/* address on the bottom */}
                <div
                    className="flex flex-col items-center text-center my-3"
                >
                    <span className="text-lg font-bold">Address</span>
                    <span>1234 Real Street, Real City, Real State, 00000</span>
                </div>

                <span className="pt-2 border-t-2 text-center border-white">Created with ❤️ by &copy; 2023 Varun Malaviya</span>
            </div>
            </div>
        </footer>
    )
}

export default Footer