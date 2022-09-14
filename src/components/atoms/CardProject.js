import cn from "classnames";

const CardProject = () => {
    const transitionHover = 'transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 shadow-2xl';
    return (
        <div className={cn("border p-4 dark:bg-dark-d400 border-dark-border cursor-pointer", transitionHover)}>
            <img src="p1.jpg" className="h-48"/>
            <div className="text-center">
                <p className="bg-gray-300 dark:bg-dark-d200 tracking-normal inline-block px-4 rounded-b-md">2021</p>
                <p className="mt-4">Girl with picture</p>
            </div>
        </div>
    )
}

export default CardProject;