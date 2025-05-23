import { CiLink } from "react-icons/ci"


const WorkPage = () => {
    const projectList = [
        {
            name: "Fiskil",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            technologies: [
                "React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Storybook", "Git"
            ],
            img: "https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383"
        },
        {
            name: "Fiskil",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            technologies: [
                "React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Storybook", "Git"
            ],
            img: "https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383"
        },
        {
            name: "Fiskil",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            technologies: [
                "React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Storybook", "Git"
            ],
            img: "https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383"
        },
    ]
    return (
        <section id="work" className=" pt-[96px] pb-[96px]">
            <div className="container">
                {/* title */}
                <div className="gap-[16px] flex justify-center items-center flex-col">
                    <h2 className="page-title ">
                        Work
                    </h2>
                    <p className="desc-text text-[1.8rem]">
                        Some of the noteworthy projects I have built:
                    </p>
                </div>
                <div className="mt-[48px] flex flex-col gap-[48px] items-center">
                    {
                        projectList.map((value, index) => {
                            return (
                                <article
                                    className={`
                                    br1-1170:flex-col  br1-1170:w-fit
                                    ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} rounded-[10px] w-[1152px] h-fit shadow-md flex  overflow-hidden"
                                    `}
                                >
                                    <div className="
                                    br3-800:w-[350px]  br3-800:h-[350px]
                                    w-[576px] p-[48px] h-[480px] bg-slate-100">
                                        <figure className="group relative w-full h-full overflow-hidden rounded-[10px] shadow-md">
                                            <div className="
                                                duration-200 group-hover:-top-0
                                                flex justify-center items-center z-10 absolute -top-full w-full h-full inset-0 bg-[rgba(0,0,0,0.2)]">
                                                <a href="">
                                                    <CiLink size={24} />
                                                </a>
                                            </div>
                                            <img className="duration-200 group-hover:scale-105 group-hover:blur-[0.9px]"
                                                src={value.img} alt="" />
                                        </figure>
                                    </div>
                                    <section className="
                                     br3-800:w-[350px]
                                    w-[576px]  p-[48px] flex flex-col gap-[24px]">
                                        <h3 className="text-[2rem] font-semibold leading-tight">
                                            {value.name}
                                        </h3>
                                        <p className="desc-text">
                                            {value.desc}
                                        </p>
                                        <div className="flex gap-[8px] flex-wrap">
                                            {
                                                value.technologies.map((item) => {
                                                    return (
                                                        <h4 className="page-title bg-slate-100">
                                                            {item}
                                                        </h4>
                                                    )
                                                })
                                            }
                                        </div>
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 19V25C24 25.5304 23.7893 26.0391 23.4142 26.4142C23.0391 26.7893 22.5304 27 22 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V14C9 13.4696 9.21071 12.9609 9.58579 12.5858C9.96086 12.2107 10.4696 12 11 12H17" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21 9H27V15" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 20L27 9" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </section>
                                </article>
                            )

                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default WorkPage;