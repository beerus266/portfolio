import { MdOutlineArrowBack } from "react-icons/md"
import ThemeMode from "../../atoms/ThemeMode"
import About from "./About"
import Experience from "./Experience"
import Footer from "./Footer"
import Projects from "./Projects"
import Skills from "./Skills"

const AboutMe = () => {
    return <>
        <div className='fixed top-5 left-5'>
            <MdOutlineArrowBack className='w-8 h-8 cursor-pointer'/>
        </div>
        <ThemeMode />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Footer />
    </>
}

export default AboutMe;