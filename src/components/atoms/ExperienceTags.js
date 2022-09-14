const ExperienceTags = ({tags}) => {

    return (
        <div className="flex text-gray-n400 gap-2 max-h-fit mt-3 flex-wrap">
            {tags.map((tag) => 
                <span className="px-2 py-1 bg-dark-d400 rounded-xl font-medium" style={{fontSize:'11px'}}>{tag}</span>
            )}
        </div>
    )
}

export default ExperienceTags;