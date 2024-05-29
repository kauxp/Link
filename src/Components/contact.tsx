import GmailLogo from '../assets/gmail.svg'
import GitLogo from '../assets/Github.svg'
import Ph4 from '../assets/ph4-contact.svg';

const contact = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex md:flex-row flex-col-reverse md:w-screen">
                <div className="md:w-2/3 h-full p-5 md:p-10 leading-7 md:leading-10">

                    <p className="text-4xl md:text-6xl text-[#2e4e82] mb-9">Let's Connect</p>
                    <p  className='text-lg'>Have any questions or need suppport? Reach out to us</p>

                    <div className='flex p-3 gap-6 md:flex-col'>
                        <div className="md:flex">
                            <a href="mailto:short.url.dev@gmail.com "><img src={GmailLogo} alt="" className='' /></a>
                            <p className="p-3 text-lg hidden md:flex"><a href="mailto:short.url.dev@gmail.com ">short.url.dev@gmail.com</a></p>
                        </div>
                        <div className=" w-[48px]">
                            <a href="https://github.com/abhijeetnishal/URLShortener"><img src={GitLogo} alt="" /></a>
                            <p className="p-3 text-lg hidden md:flex"><a href="https://github.com/abhijeetnishal/URLShortener">https://github.com/abhijeetnishal/URLShortener</a></p>
                        </div>
                    </div>
                    
                    <p className='text-lg'>Thank you for choosing Short.url! Together, we can make URL shortening simpler and more powerful</p>
                </div>
                <div className="md:w-5/12 pt-10 md:p-0 flex justify-center items-center">
                    <img src={Ph4} alt="" />
                </div>
            </div>
        </div>
    )
}
export default contact;