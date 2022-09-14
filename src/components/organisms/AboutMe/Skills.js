import CardSkill from "../../atoms/CardSkill";
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiJavascript, SiPhp, SiDocker, SiNginx, SiTailwindcss } from 'react-icons/si';

const Skills = () => {

    const cardSkills = [
        {
            name: 'HTML 5',
            icon: FaHtml5
        },
        {
            name: 'CSS 3',
            icon: FaCss3Alt
        },
        {
            name: 'Javascript',
            icon: SiJavascript
        },
        {
            name: 'Php',
            icon: SiPhp
        },
        {
            name: 'Docker',
            icon: SiDocker
        },
        {
            name: 'Tailwind CSS',
            icon: SiTailwindcss
        },
        {
            name: 'Nginx',
            icon: SiNginx
        },
        {
            name: 'MySQL',
            icon: GrMysql
        },
    ];

    return (
        <div className="bg-white dark:bg-dark-d1000 px-16 py-20 dark:text-text-white tracking-widest">
            <p className="uppercase text-center font-medium">
                Skills
            </p>
            <div className="flex justify-center mt-16 gap-5">
                {cardSkills.map((skill) => <CardSkill skill={skill}/>)}
            </div>
        </div>
    )
}

export default Skills;