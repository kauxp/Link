import FooterLogo from '../assets/footerLogo.svg'

const footer = () => {
    return (
        <footer className="flex flex-col md:flex-row w-screen bg-[#ebebeb]">
            <div className=" flex flex-col gap-6 lg:w-1/3 h-[40vh] justify-center items-left p-[10vh]">
                <img className='w-min h-min' src={FooterLogo} alt="" />
                <p className="text-[#7c91af] md:text-xl sm:text-2xl xs:text-2xl">© 2024 All rights reserved</p>
            </div>
            <div className="hidden md:flex text-lg  w-2/3 h-[40vh] leading-10 md:justify-center md:items-center gap-20">
                <div>
                    <div className="text-2xl text-[#7c91af]">Engagement</div>
                    <div>QR Codes</div>
                    <div>2D Bar Codes</div>
                    <div>Dynamic Links</div>
                    <div>Customised Laing Pages</div>
                </div>
                <div>
                    <div className="text-2xl text-[#7c91af]">Analytics</div>
                    <div>Link Analytics</div>
                    <div>Geolocation Tracking</div>
                    <div>A/B Testing</div>
                    <div>Developer API</div>
                </div>
                <div>
                    <div className="text-2xl text-[#7c91af]">About</div>
                    <div>About this project</div>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                    <div>Contact</div>
                </div>
            </div>
        </footer>
    )
}

export default footer