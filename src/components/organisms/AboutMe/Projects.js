import CardProject from "../../atoms/CardProject";

const Projects = () => {
    return (
        <div className="bg-white dark:bg-dark-d1000 px-16 py-20 text-black dark:text-white tracking-widest">
            <p className="uppercase text-center font-medium">
                projects
            </p>
            <div className="flex justify-evenly mt-16">
                {[1,2,3].map(() => <CardProject />)}
            </div>
        </div>
    )
}

export default Projects;