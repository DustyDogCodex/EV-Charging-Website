import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'

function Footer() {
    return (
        <footer
            className="w-full h-full flex flex-col md:flex-row justify-center bg-slate-200 px-5"
        >
            {/* support/links/address section */}
            <div
                className="w-4/5 flex items-center justify-center mt-3"
            >
                {/* support and links section */}
                <div
                    className="flex items-center gap-20"
                >
                    <div className="w-1/2 font-semibold text-2xl text-center">
                        Experts in creating tailored, turnkey EV charging solutions.
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
                        <span className="text-lg font-bold mb-5">Socials</span>
                            <FacebookIcon color='primary'/>
                            <XIcon color='primary'/>
                            <InstagramIcon color='primary'/>
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

                <div
                    className="flex flex-col items-center justify-center"
                >
                    <span className="pt-2 border-t-2 text-center">Created with ❤️ by &copy; 2024 Varun Malaviya</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer