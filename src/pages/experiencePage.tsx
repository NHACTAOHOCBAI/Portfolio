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
        <section id="exp" className="bg-slate-200 pt-[96px] pb-[96px]">
            <div className="container">
                {/* title */}
                <div className="gap-[16px] flex justify-center items-center flex-col">
                    <h2 className="page-title ">
                        Experience
                    </h2>
                    <p className="
                        br3-800:text-center
                    desc-text text-[1.8rem]">
                        Here is a quick summary of my most recent experiences:
                    </p>
                </div>
                <div className="mt-[48px] flex flex-col gap-[48px] items-center">
                    {
                        expList.map((value) => {
                            return (
                                <article className="
                                br2-900:grid-cols-1 br2-900:grid-rows-[auto] br2-900:w-[auto]
                                duration-200 hover:translate-x-20 hover:shadow-2xl
                                grid grid-cols-4
                               shadow-lg p-[32px] rounded-[8px] bg-white w-[896px] desc-text">
                                    <figure className="w-[200px] text-left col-start-1 ">
                                        <img className="w-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg1hVrGgDyRiqMoXpx8zjispf0j_tJ38YWQ&s" alt="" />
                                    </figure>
                                    <section className="
                                    br3-800:w-[330px]
                                    w-[385px] text-left col-start-2 br2-900:col-start-1 br2-900:row-start-3">
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
                                    <div className="w-[200px] text-right br2-900:text-left pb-2 col-start-4  br2-900:col-start-1 br2-900:row-start-2">
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