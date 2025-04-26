import { IoMdClose } from "react-icons/io";

interface IProp {
    isOpenDrawer: boolean,
    setIsOpenDrawer: (value: boolean) => void
}
const Drawer = ({ isOpenDrawer, setIsOpenDrawer }: IProp) => {
    return (
        <div className="h-screen absolute">
            <div className={`
                  duration-300 ${isOpenDrawer ? 'opacity-100 visible' : 'opacity-0 invisible '}
                fixed inset-0 bg-[rgba(0,0,0,0.2)]`}
                onClick={() => setIsOpenDrawer(false)}
            >
            </div>

            <div className={`
               duration-300 ${isOpenDrawer ? 'translate-x-[0%]' : 'translate-x-[-100%]'}
             flex flex-col gap-[20px] fixed inset-0 bg-white w-[70%]`}
            >
                <div className="h-[70px] flex justify-center items-center">
                    <IoMdClose onClick={() => setIsOpenDrawer(false)} size={30} className=" ml-auto mr-[15px]" />
                </div>
                <div className="bg-slate-400 h-[1px]"></div>
                <ul className="flex flex-col gap-3">
                    <li className=" p-[20px] flex justify-left items-center h-[50px] font-medium text-gray-800 text-3xl">
                        <a href="">About</a>
                    </li>
                    <li className=" p-[20px] flex justify-left items-center h-[50px] font-medium text-gray-800 text-3xl">
                        <a href="">Testimonials</a>
                    </li>
                    <li className=" p-[20px] flex justify-left items-center h-[50px] font-medium text-gray-800 text-3xl">
                        <a href="">Work</a>
                    </li>
                    <li className=" p-[20px] flex justify-left items-center h-[50px] font-medium text-gray-800 text-3xl">
                        <a href="">Contact</a>
                    </li>

                </ul>
                <a className="
                mx-[20px]
                flex justify-center select-none duration-200 hover:shadow-xl hover:scale-105 hover:bg-sky-500 rounded-[12px] px-[16px] py-[20px] bg-[#130f40]  text-white" href="#!">Download CV</a>
            </div>
            {/* <div className="
             h-[100%] w-[70%]   bg-white fixed">
                <div className="h-[70px] flex justify-center items-center">
                    <IoMdClose onClick={() => setIsOpenDrawer(false)} size={30} className=" ml-auto mr-[15px]" />
                </div>
                <div className="bg-slate-400 h-[1px]"></div>
                <ul className="">
                    <li className="h-[50px] font-medium text-gray-800 text-3xl">
                        <a href="">About</a>
                    </li>

                </ul>
            </div> */}
        </div>
    )
}

export default Drawer;