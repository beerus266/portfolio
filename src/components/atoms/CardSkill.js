const CardSkill = ({skill}) => {

    return (
        <div className="w-24 h-20 bg-brown-b500 dark:bg-dark-d800 flex flex-col items-center p-2 rounded">
            <skill.icon className='w-12 h-12'/>
            <p className='tracking-normal text-sm mt-1'>{skill.name}</p>
        </div>
    )
}

export default CardSkill;