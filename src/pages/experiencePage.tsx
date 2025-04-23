const ExperiencePage = () => {
    const expList = [
        {
            role: "Sr.Frontend Developer",
            contribute: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                'Ut pretium arcu et massa semper, id fringilla leo semper.',
                "Sed quis justo ac magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ],
            time: "Nov 2021 - Present"
        },
        {
            role: "Sr.Frontend Developer",
            contribute: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                'Ut pretium arcu et massa semper, id fringilla leo semper.',
                "Sed quis justo ac magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ],
            time: "Jul 2017 - Oct 2021"
        },
        {
            role: "Full Stack Developer",
            contribute: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ],
            time: "Dec 2015 - May 2017"
        }
    ]
    return (
        <section className="bg-slate-200 pt-[96px] pb-[96px]">
            <div className="container">
                {/* title */}
                <div className="gap-[16px] flex justify-center items-center flex-col">
                    <h2 className="page-title ">
                        Experience
                    </h2>
                    <p className="desc-text text-[1.8rem]">
                        Here is a quick summary of my most recent experiences:
                    </p>
                </div>
                <div className="mt-[48px] flex flex-col gap-[48px] items-center">
                    {
                        expList.map((value) => {
                            return (
                                <article className="p-[32px] rounded-[8px] bg-white w-[896px] flex justify-between desc-text">
                                    <figure className="w-[200px] text-left">
                                        <img className="w-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg1hVrGgDyRiqMoXpx8zjispf0j_tJ38YWQ&s" alt="" />
                                    </figure>
                                    <section className="w-[480px] text-left">
                                        <h3 className="text-[2rem] font-semibold leading-tight">
                                            {value.role}
                                        </h3>
                                        <ul className="mt-[16px]">
                                            {
                                                value.contribute.map((item) => {
                                                    return (
                                                        <li className="flex gap-[10px]">
                                                            <div className="flex-shrink-0 mt-[10px] rounded-full w-[5px] h-[5px]  bg-gray-600"></div>
                                                            <span>{item}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </section>
                                    <div className="w-[200px] text-right">
                                        <span>{value.time}</span>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default ExperiencePage;