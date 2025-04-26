import Avatar from "../components/avatar";

const AboutPage = () => {
    return (
        <section className="
        bg-slate-200 pt-[96px] pb-[96px] custom-size">
            <div className="
            
            container">
                {/* title */}
                <div className="flex justify-center">
                    <h2 id="about" className="page-title ">
                        About me
                    </h2>
                </div>
                <div className="
                br3-800:flex-col items-center gap-20
                flex justify-between mt-[48px]">
                    <Avatar
                        boxShadow="-20px 20px rgba(0,0,0,0.2)"
                        objectPosition="center center "
                        className="w-[400px] h-[500px]"
                        urlImg="https://i.pinimg.com/736x/44/7a/5d/447a5d5a53f004791c2601d24bdb8f9c.jpg" />
                    <section className="
                                br3-800:w-[100%] br3-800:text-center
                    w-[45%]">
                        <h3 className="text-[2.5rem] font-semibold leading-tight">Curious about me? Here you have it:</h3>
                        <div className="desc-text flex flex-col gap-8 mt-8">
                            <p>
                                I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                            </p>
                            <p>
                                I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                            </p>
                            <p>
                                I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                            </p>
                            <p>
                                When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                            </p>
                            <p>
                                One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
                            </p>
                        </div>
                    </section>
                </div>

            </div>
        </section>
    )
}
export default AboutPage;