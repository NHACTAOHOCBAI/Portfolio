import { useState } from "react"

const AppHeader = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const linkData = [
        {
            name: "About",
            path: '#about'
        },
        {
            name: "Work",
            path: '#work'
        },
        {
            name: "Testimonials",
            path: '#testimonials'
        },
        {
            name: "Contact",
            path: '#contact'
        }
    ]
    return (
        <header className="h-[68px]">
            <div className="container flex items-center justify-end" >
                <nav className="flex gap-[24px]">
                    {
                        linkData.map((value) => {
                            return (
                                <a className=" text-gray-700" href={value.path}>{value.name}</a>
                            )
                        })
                    }
                </nav>
                <div className="w-[1px] h-[24px] bg-gray-300 mx-[24px]"></div>
                <div>
                    <img src={isDarkMode ? "/src/assets/img/app-header/dark-mode.svg" : "/src/assets/img/app-header/light-mode.svg"} alt="" onClick={() => setIsDarkMode(!isDarkMode)} />
                </div>
                <a className="ml-[16px] rounded-[12px] px-[16px] py-[10px] bg-[#130f40]  text-white" href="#!">Download CV</a>
            </div>
        </header>
    )
}

export default AppHeader;