const HeroPage = () => {
    return (
        <section className="h-screen">
            <div className="container flex items-center">
                <section>
                    <h1 className="text-[6rem] font-bold leading-tight">
                        Hi,I'm Phucs
                    </h1>
                    <p className="mt-[8px] w-[770px] text-[1.6rem] leading-[1.5] text-gray-600">
                        I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
                    </p>
                    <div className="flex gap-[8px] mt-[48px]">
                        <img src="src/assets/img/hero_section/icon.svg" alt="" />
                        <p className="text-[1.6rem] leading-[1.5] text-gray-600">Di An, Dong Hoa, Binh Duong</p>
                    </div>
                    <div className="flex gap-[8px] mt-[8px]">
                        <img src="src/assets/img/hero_section/icon2.svg" alt="" />
                        <p className="text-[1.6rem] leading-[1.5] text-gray-600">Available for new projects</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default HeroPage