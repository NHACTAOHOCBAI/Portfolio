interface IProps {
    urlImg: string,
    boxShadow?: string,
    objectPosition?: string,
    className?: string,

}
const Avatar = ({
    className = "avatar w-[280px] h-[320px] duration-200 hover:-translate-y-5",
    urlImg, boxShadow = "20px 20px rgba(0,0,0,0.2)", objectPosition = "left top" }: IProps) => {
    return (
        <figure>
            <img
                className={className}
                style={{
                    border: "solid transparent 8px",
                    objectPosition: objectPosition,
                    objectFit: "cover", boxShadow: boxShadow
                }} src={urlImg} alt="Phucs" />
        </figure>
    )
}
export default Avatar