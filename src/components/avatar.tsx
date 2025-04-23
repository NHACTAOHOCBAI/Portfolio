interface IProps {
    urlImg: string,
    boxShadow?: string,
}
const Avatar = ({ urlImg, boxShadow = "20px 20px rgba(0,0,0,0.2)" }: IProps) => {
    return (
        <figure>
            <img
                className="w-[280px] h-[320px]"
                style={{
                    objectPosition: "left top",
                    objectFit: "cover", boxShadow: boxShadow
                }} src={urlImg} alt="Phucs" />
        </figure>
    )
}
export default Avatar