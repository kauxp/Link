import Ph2 from '../assets/ph2.svg';

const two = () => {
    
    return (
        <div className="flex flex-col md:flex-row w-screen bg-[#ebebeb]">
            <div className="md:w-5/12 pt-10 md:p-0 flex justify-center items-center ps-2">
                <div className="imgCnt w-[80%]">
                    <img src={Ph2} alt="" />
                </div>
            </div>
            <div className="md:w-7/12  flex flex-col p-[8vw] gap-11 ">
                <p className="text-3xl md:text-4xl lg:text-4xl font-medium tracking-wide">Improve User Engagement</p>
                <p className="text-xl lg:text-2xl">Simplifies sharing long URLs across various platforms, making it easier for users to share content with friends and followers</p>
                <div className="md:flex flex-row ps-12 gap-[9vw] ">
                    <ul style={{ listStyleType: 'disc' }} className="text-xl lg:text-2xl leading-10">
                        <li className="p-2">Customized branded domain</li>
                        <li className="p-2">QR Codes</li>
                        <li className="p-2">2D Bar Codes</li>
                    </ul>
                    <ul style={{ listStyleType: 'disc' }} className="text-xl lg:text-2xl leading-10">
                        <li className="p-2">Calling-to-Action Optimization</li>
                        <li className="p-2">Dynamic Links</li>
                        <li className="p-2">Customized Landing Pages</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default two;