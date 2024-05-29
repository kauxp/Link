import Ph3 from '../assets/ph3-2.svg';

const three = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-7/12  flex flex-col p-[8vw] gap-11">
                <p className="text-3xl md:text-4xl lg:text-4xl font-medium tracking-wide">Enhanced Analytics and Tracking</p>
                <p className="text-xl lg:text-2xl">Track your link analytics and get a profile of how they perform. Get click activity, user geographical location and referral managemnet.</p>
                <div className="md:flex flex-row ps-12 gap-[9vw] ">
                    <ul style={{ listStyleType: 'disc' }} className="text-xl lg:text-2xl leading-10">
                        <li className="p-2">Event Tracking</li>
                        <li className="p-2">A/B Testing</li>
                        <li className="p-2">Geological Tracking</li>
                    </ul>
                    <ul style={{ listStyleType: 'disc' }} className="text-xl lg:text-2xl leading-10">
                        <li className="p-2">UTM Parameter Integration</li>
                        <li className="p-2">Cross Device Attribute</li>
                        <li className="p-2">Developer Analytics API</li>
                    </ul>
                </div>
            </div>
            <div className="md:w-5/12 pt-10 md:p-0 ps-2 flex justify-center items-center">
                <div className="imgCnt w-[80%]">
                    <img src={Ph3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default three;