import { BsFacebook, BsInstagram } from "react-icons/bs";
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    return (
        <div className="bg-orange-200 dark:bg-dark-d200 text-black dark:text-white text-center py-8">
            <div className="flex justify-center mb-6 gap-5">
                <BsFacebook className='w-5 h-5 cursor-pointer'/>
                <BsInstagram className='w-5 h-5 cursor-pointer'/>
                <SiGmail className='w-5 h-5 cursor-pointer'/>
            </div>
            <p className="text-xs">
                Powered © Hainv
            </p>
        </div>
    )
}

export default Footer;