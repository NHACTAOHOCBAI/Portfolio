import { useEffect, useState } from "react"

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
                    <img src={isDarkMode ? "/src/assets/img/app-header/dark-mode.svg" : "/src/assets/img/app-header/light-mode.svg"} alt="" onClick={toggleMode} />
                </div>
                <a className="dark:bg-slate-600 ml-[16px] rounded-[12px] px-[16px] py-[10px] bg-[#130f40]  text-white" href="#!">Download CV</a>
            </div>
        </header>
    )
}

export default AppHeader;