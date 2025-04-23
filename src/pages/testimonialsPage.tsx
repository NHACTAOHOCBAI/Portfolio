const TestimonialsPage = () => {
    const commensList = [
        {
            desc: "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
            name: 'John Doe',
            email: 'Founder - xyz.com'
        },
        {
            desc: "“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”",
            name: 'John Doe',
            email: 'Founder - xyz.com'
        },
        {
            desc: "“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”",
            name: 'John Doe',
            email: 'Founder - xyz.com'
        }
    ]
    return (
        <section className="bg-slate-200 pt-[96px] pb-[96px]">
            <div className="container">
                {/* title */}
                <div className="gap-[16px] flex justify-center items-center flex-col">
                    <h2 className="page-title ">
                        Testimonials
                    </h2>
                    <p className="desc-text text-[1.8rem]">
                        Nice things people have said about me:
                    </p>
                </div>
                <div className="mt-[48px] flex justify-between">
                    {
                        commensList.map((value) => {
                            return (
                                <section className="shadow-md items-center h-[428px] w-[373.33px] bg-white rounded-xl p-[48px] flex flex-col gap-[24px] overflow-hidden">
                                    <div className="w-[64px] h-[64px] rounded-full bg-gray-500 flex justify-center items-center">
                                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1666 10C13.1666 8.01088 13.9568 6.10322 15.3633 4.6967C16.7698 3.29018 18.6775 2.5 20.6666 2.5C22.6557 2.5 24.5634 3.29018 25.9699 4.6967C27.3764 6.10322 28.1666 8.01088 28.1666 10C28.1666 11.9891 27.3764 13.8968 25.9699 15.3033C24.5634 16.7098 22.6557 17.5 20.6666 17.5C18.6775 17.5 16.7698 16.7098 15.3633 15.3033C13.9568 13.8968 13.1666 11.9891 13.1666 10ZM6.91829 33.5083C6.97449 29.8991 8.44769 26.4568 11.0199 23.9243C13.5921 21.3918 17.057 19.9724 20.6666 19.9724C24.2763 19.9724 27.7412 21.3918 30.3134 23.9243C32.8856 26.4568 34.3588 29.8991 34.415 33.5083C34.4193 33.7513 34.3527 33.9903 34.2234 34.196C34.094 34.4017 33.9075 34.5653 33.6866 34.6667C29.6019 36.5395 25.1602 37.5061 20.6666 37.5C16.0233 37.5 11.6116 36.4867 7.64662 34.6667C7.42577 34.5653 7.23925 34.4017 7.10989 34.196C6.98054 33.9903 6.91395 33.7513 6.91829 33.5083Z" fill="black" />
                                        </svg>
                                    </div>
                                    <p className="desc-text">
                                        {value.desc}
                                    </p>
                                    <div className="text-center mt-auto">
                                        <h3 className="text-[1.8rem] font-semibold leading-tight">
                                            {value.name}
                                        </h3>
                                        <h4 className="desc-text">
                                            {value.email}
                                        </h4>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default TestimonialsPage;