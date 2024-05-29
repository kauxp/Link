import IntroPlaceHolder from '../assets/ph1.svg'
import ReactTypingEffect from 'react-typing-effect';

const one = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className=" md:w-7/12 flex flex-col p-[5vw] gap-6">
                <p className="text-4xl md:text-5xl lg:text-7xl"><span className="text-[#2C4E80]">Shorten</span> your Links</p>
                <p className="text-4xl md:text-5xl lg:text-7xl">Boost <span className="text-[#2C4E80]">your</span> reach</p>
                <ReactTypingEffect text={["Our URL shortner helps you create custom, branded links that are easy to share and track. Get started for free today!"]}/>   
                {/* /* <p className="text-lg md:text-2xl">Our URL shortner helps you create custom, branded links that are easy to share and track. Get started for free today!</p> */ }
                
                <div className="flex gap-4 align-center items-center">
                    <div className="authOption w-max p-3 h-[6vh] bg-[#2C4E80] rounded-[20px] text-white flex justify-center items-center font-bold">
                        <span>Get started for free</span>
                    </div>
                    <div className="text-lg text-[#2C4E80]">
                        Learn More
                    </div>
                </div>
            </div>

            <div className="md:w-5/12 pt-10 md:p-0 flex justify-center items-center">
                <div className="imgCnt w-[80%]">
                    <img src={IntroPlaceHolder} alt="" />
                </div>
            </div>
        </div>
    )
}
export default one;