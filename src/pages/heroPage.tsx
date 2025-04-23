import { FiFacebook, FiGithub } from "react-icons/fi"
import Avatar from "../components/avatar"

const HeroPage = () => {
    return (
        <section className="h-screen">
            <div className="container flex items-center justify-between">
                <section className="w-[50%]">
                    {/* introduction */}
                    <h1 className="text-[6rem] font-bold leading-tight">
                        Hi,I'm Phucs
                    </h1>
                    <p className="mt-[8px] w-[770px] desc-text ">
                        I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
                    </p>
                    <div className="flex gap-[8px] mt-[48px]">
                        <img src="src/assets/img/hero_section/icon.svg" alt="" />
                        <p className="desc-text ">Di An, Dong Hoa, Binh Duong</p>
                    </div>
                    <div className="flex gap-[8px] mt-[8px]">
                        <img src="src/assets/img/hero_section/icon2.svg" alt="" />
                        <p className="desc-text ">Available for new projects</p>
                    </div>
                    {/* contact */}
                    <div className="flex mt-[48px] gap-[10px]">
                        <a href="https://github.com/NHACTAOHOCBAI">
                            <FiGithub size={24} className="text-gray-600" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100047067371826">
                            <FiFacebook size={24} className="text-gray-600" />
                        </a>
                    </div>
                </section>
                <div>
                    <Avatar urlImg="https://i.pinimg.com/736x/13/9b/bb/139bbb8c450b7cd338a2ad25aef7d50d.jpg" />
                </div>
            </div>
        </section>
    )
}

export default HeroPage