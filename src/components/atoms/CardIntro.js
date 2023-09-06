const CardIntro = () => {
    return (
        <div className="w-full border bg-gray-50 dark:bg-dark-d400 border-dark-border rounded-sm">
            <div className="border-b p-2 flex justify-start gap-3 border-dark-border" >
                <div className="rounded-full" style={{height: '10px', width: '10px', backgroundColor: 'rgb(237, 76, 92)'}}></div>
                <div className="rounded-full" style={{height: '10px', width: '10px', backgroundColor: 'rgb(253, 203, 88)'}}></div>
                <div className="rounded-full" style={{height: '10px', width: '10px', backgroundColor: 'rgb(120, 177, 89)'}}></div>
            </div>
            <div className="p-4 text-left text-dark-icon dark:text-white font-trebuchet">
                <p className="py-4 text-xl">Hello there :)))</p>
                <p className="text-sm">
                👋 I'm Nguyen Van Hai. Fictional person for preview purposes :) I'm working like a full-stack developer with newest frameworks like NextJS and NestJS. ⭐💜
                </p>
            </div>
        </div>
    )
}

export default CardIntro;