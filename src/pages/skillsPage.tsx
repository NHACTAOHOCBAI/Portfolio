const SkillsPage = () => {
    const skillsList = [
        {
            logo: "https://i.pinimg.com/736x/94/5d/83/945d8320b2991e7345ea0dda5ee1b6bb.jpg",
            name: "HTML5"
        },
        {
            logo: "https://i.pinimg.com/736x/ac/26/26/ac262626eb1e924c85b8b68fe97c2213.jpg",
            name: "CSS"
        },
        {
            logo: "https://i.pinimg.com/736x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg",
            name: "Javascript"
        },
        {
            logo: "https://i.pinimg.com/736x/6c/95/8c/6c958c1d968eb6dbc6ad94b4ca3a4ba7.jpg",
            name: "Typescript"
        },
        {
            logo: "https://i.pinimg.com/736x/82/40/ac/8240ac872c818d2a39ef20d819fdbf0d.jpg",
            name: "React Js"
        },
        {
            logo: "https://i.pinimg.com/736x/5e/42/c9/5e42c926feb229f934d3089d89c26e2f.jpg",
            name: "Tailwind"
        },
        {
            logo: "https://static-00.iconduck.com/assets.00/ant-design-icon-1024x1023-73enoat8.png",
            name: "Antd"
        },
        {
            logo: "https://i.pinimg.com/736x/56/40/95/564095b05c52215257f267dec6c70ade.jpg",
            name: "Git"
        },
    ]
    return (
        <section className="pt-[96px] pb-[96px]">
            <div className="container">
                {/* title */}
                <div className="gap-[16px] flex justify-center items-center flex-col">
                    <h2 className="page-title ">
                        Skills
                    </h2>
                    <p className="desc-text text-[1.8rem]">
                        The skills, tools and technologies I am really good at:
                    </p>
                </div>
                {/* skills */}
                <div className="flex justify-between mt-[48px]">
                    {skillsList.map((value) => {
                        return (
                            <section >
                                <figure className="text-center">
                                    <img src={value.logo} alt={value.name} className="w-[50px] h-[50px] object-center m-auto" />
                                    <figcaption className="desc-text mt-[10px]">
                                        {value.name}
                                    </figcaption>
                                </figure>
                            </section>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default SkillsPage