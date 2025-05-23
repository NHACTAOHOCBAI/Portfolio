import { useEffect, useState } from "react"
import { IoMenu } from "react-icons/io5"
interface IProp {
    isOpenDrawer: boolean,
    setIsOpenDrawer: (value: boolean) => void
}
const AppHeader = ({ setIsOpenDrawer }: IProp) => {
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
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", !isDarkMode ? 'dark' : 'light');
    }

    // Load theme để set theme hien tai  
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || 'light';
        setIsDarkMode(savedTheme === 'light' ? false : true);
    }, []);
    // Them class dark vao root
    // Boi vi khi doi khi khong can nhan nut thi no van co dark
    useEffect(() => {
        const root = document.documentElement;
        const savedTheme = localStorage.getItem("theme") || 'light';
        if (savedTheme === 'dark') {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDarkMode]);
    return (
        <header className="h-[68px] ">
            <IoMenu size={40} className="
            br3-800:block
            hidden
            ml-[10px] mt-[10px]"
                onClick={() => setIsOpenDrawer(true)} />
            <div className="
            br3-800:hidden
            container flex items-center justify-end" >
                <nav className="flex gap-[24px]">
                    {
                        linkData.map((value) => {
                            return (
                                <a
                                    style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
                                    className="duration-200 hover:text-indigo-400 hover:-translate-y-1
                                 select-none text-gray-700" href={value.path}>{value.name}</a>
                            )
                        })
                    }
                </nav>
                <div className="select-none w-[1px] h-[24px] bg-gray-300 mx-[24px]"></div>
                <div className="select-none">
                    <img src={isDarkMode ? "/src/assets/img/app-header/dark-mode.svg" : "/src/assets/img/app-header/light-mode.svg"} alt="" onClick={toggleMode} />
                </div>
                <a className="select-none duration-200 hover:shadow-xl hover:scale-105 hover:bg-sky-500 ml-[16px] rounded-[12px] px-[16px] py-[10px] bg-[#130f40]  text-white" href="#!">Download CV</a>
            </div>
        </header>
    )
}

export default AppHeader;