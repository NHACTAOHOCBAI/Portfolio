import { FiFacebook, FiGithub } from "react-icons/fi";
const AppFooter = () => {
    return (
        <footer id="contact" className="pt-[96px] pb-[96px]">
            <div className="container flex flex-col items-center justify-center text-center" >
                <h2 className="page-title">Get in touch</h2>
                <p className="
                 br3-800:w-[400px]
                desc-text text-[1.8rem] w-[580px] mt-[16px]">
                    What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </p>
                {/* contact */}
                <div className="
                br3-800:text-[2rem]
                mt-[48px] text-[3rem] font-semibold leading-tight">
                    <div className="flex gap-[20px] justify-center items-center">
                        <svg
                            className=" br3-800:w-[20px]"
                            width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6667 5.3335H5.33341C3.86066 5.3335 2.66675 6.5274 2.66675 8.00016V24.0002C2.66675 25.4729 3.86066 26.6668 5.33341 26.6668H26.6667C28.1395 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1395 5.3335 26.6667 5.3335Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M29.3334 9.3335L17.3734 16.9335C16.9618 17.1914 16.4858 17.3282 16.0001 17.3282C15.5143 17.3282 15.0384 17.1914 14.6267 16.9335L2.66675 9.3335" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>
                            dangphucnguyen20112005@gmail.com
                        </span>
                        <svg
                            className=" br3-800:w-[20px]"
                            width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6667 16.6665H19.3334C17.8607 16.6665 16.6667 17.8604 16.6667 19.3332V32.6665C16.6667 34.1393 17.8607 35.3332 19.3334 35.3332H32.6667C34.1395 35.3332 35.3334 34.1393 35.3334 32.6665V19.3332C35.3334 17.8604 34.1395 16.6665 32.6667 16.6665Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.3334 27.3332C9.86675 27.3332 8.66675 26.1332 8.66675 24.6665V11.3332C8.66675 9.8665 9.86675 8.6665 11.3334 8.6665H24.6667C26.1334 8.6665 27.3334 9.8665 27.3334 11.3332" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="flex mt-[10px] gap-[20px] justify-center items-center">
                        <svg
                            className=" br3-800:w-[20px]"
                            width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.3334 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2266C22.3239 28.7808 18.3827 27.3788 14.9201 25.1333C11.6985 23.0862 8.96719 20.3549 6.92007 17.1333C4.66671 13.6549 3.2644 9.69463 2.82674 5.5733C2.79342 5.20459 2.83724 4.83298 2.95541 4.48213C3.07357 4.13128 3.2635 3.80889 3.51309 3.53546C3.76269 3.26204 4.06648 3.04358 4.40513 2.894C4.74378 2.74441 5.10986 2.66698 5.48007 2.66663H9.48007C10.1271 2.66026 10.7545 2.8894 11.2451 3.31134C11.7357 3.73328 12.0562 4.31923 12.1467 4.95997C12.3156 6.24006 12.6287 7.49694 13.0801 8.70663C13.2595 9.18387 13.2983 9.70252 13.1919 10.2011C13.0856 10.6998 12.8386 11.1574 12.4801 11.52L10.7867 13.2133C12.6848 16.5514 15.4487 19.3152 18.7867 21.2133L20.4801 19.52C20.8426 19.1615 21.3003 18.9144 21.7989 18.8081C22.2975 18.7018 22.8162 18.7406 23.2934 18.92C24.5031 19.3714 25.76 19.6845 27.0401 19.8533C27.6878 19.9447 28.2793 20.2709 28.7021 20.77C29.125 21.269 29.3496 21.9061 29.3334 22.56Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>
                            0838609516
                        </span>
                        <svg
                            className=" br3-800:w-[20px]"
                            width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6667 16.6665H19.3334C17.8607 16.6665 16.6667 17.8604 16.6667 19.3332V32.6665C16.6667 34.1393 17.8607 35.3332 19.3334 35.3332H32.6667C34.1395 35.3332 35.3334 34.1393 35.3334 32.6665V19.3332C35.3334 17.8604 34.1395 16.6665 32.6667 16.6665Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.3334 27.3332C9.86675 27.3332 8.66675 26.1332 8.66675 24.6665V11.3332C8.66675 9.8665 9.86675 8.6665 11.3334 8.6665H24.6667C26.1334 8.6665 27.3334 9.8665 27.3334 11.3332" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="mt-[48px] desc-text flex flex-col items-center">
                    <p>You may also find me on these platforms!</p>
                    <div className="flex mt-[8px] gap-[10px]">
                        <a href="https://github.com/NHACTAOHOCBAI">
                            <FiGithub size={24} className="text-gray-600" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100047067371826">
                            <FiFacebook size={24} className="text-gray-600" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default AppFooter;