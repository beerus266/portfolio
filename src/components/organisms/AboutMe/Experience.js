import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { FaLaravel } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import ExperienceTags from '../../atoms/ExperienceTags';

const Experience = () => {

    return (
        <div className="bg-brown-b200 dark:bg-dark-d200 px-16 py-20 tracking-widest">
            <p className="uppercase text-center font-medium mb-10 dark:text-white text-text-black">
                Experience
            </p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: '#ddd', color: '#000' }}
                    date="2017 - 2022"
                    iconClassName='bg-dark-d400'
                    icon={<MdSchool className='text-text-white'/>}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold">Hanoi University of Science and Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
                    <p>
                        Graduated with Engineer Degree. CPA: 3.0
                    </p>
                    <ExperienceTags tags={['Javsscript', 'Docker', 'Python', 'IOT', 'Blockchain']}/>
                </VerticalTimelineElement>
               
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="3/2020 - 9/2020"
                    contentStyle={{ background: '#ddd', color: '#000' }}
                    iconClassName='bg-dark-d400'
                    icon={<FaLaravel className='text-text-white'/>}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold">STI Vietnam</h3>
                    <h4 className="vertical-timeline-element-subtitle">Intern web developer</h4>
                    <p>
                        Web developer using Laravel framework. Build CMS website for company 's production
                    </p>
                    <ExperienceTags tags={['Laravel', 'PHP', 'Jquery']}/>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="6/2021 - now"
                    contentStyle={{ background: '#ddd', color: '#000' }}
                    iconClassName='bg-dark-d400'
                    icon={<SiNextdotjs className='text-text-white'/>}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold">DLS company</h3>
                    <h4 className="vertical-timeline-element-subtitle">Fresher web developer</h4>
                    <p>
                        Develop website - product for company. Do task about both backend and frontend. 
                    </p>
                    <ExperienceTags tags={['PHP', 'Javascript', 'NextJs', 'Tailwind CSS']}/>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;