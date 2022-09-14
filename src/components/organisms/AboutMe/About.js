import { 
    BsCodeSlash, 
    BsFacebook, 
    BsGithub,
    BsLinkedin
} from 'react-icons/bs';
import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa';
import Typical from 'react-typical';
import CardIntro from '../../atoms/CardIntro';

const About = () => {

    return (
        <div className="bg-brown dark:bg-dark-d800" style={{height: '100vh'}}>
            <div className="">
                <div className='flex justify-evenly pt-32'>
                    <div className='w-1/3'>
                        <div className='shadow-xl p-4 max-w-fit mx-auto bg-light-l200 dark:bg-dark-d400' style={{boxShadow: '0 4px 6px rgb(0 0 0 / 30%)'}}>
                            <img src='avatar.jpg' className='h-56'/>
                            <div className='p-4 pb-1 flex justify-center gap-3'>
                                <FaReact className='w-12 h-auto text-blue-b400'/>
                                <FaNodeJs className='w-12 h-auto text-green-g500'/>
                                {/* <FaLaravel className='w-12 h-auto text-red'/> */}
                            </div>
                        </div>
                        <div className='flex justify-center gap-4 mt-8'>
                            <BsFacebook className='w-6 h-6 cursor-pointer hover:text-blue-b800'/>
                            <BsGithub className='w-6 h-6 cursor-pointer hover:text-purple-p600'/>
                            <BsLinkedin className='w-6 h-6 cursor-pointer hover:text-blue-b700'/>
                        </div>
                    </div> 
                    <div className='w-1/2'>
                        <div className="flex flex-col justify-center mx-auto">    
                            <BsCodeSlash className='w-24 h-auto mx-auto text-dark-icon' />
                            <div className=' dark:text-white mt-5 mb-8 text-center'>
                                <h1 className='font-semibold text-4xl font-h1'>Hải Tây Tựu</h1>
                                <Typical 
                                    className='mt-3 text-2xl uppercase font-light'
                                    steps={['Fullstack Developer', 3000, 'Blockchain Developer', 3000,]}
                                    loop={50}
                                    wrapper="p"
                                />
                            </div>
                            <CardIntro />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default About;