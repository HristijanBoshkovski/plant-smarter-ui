import "./Info.css"

const Info = ({
    type,
    message
}) => {
    return <span className={"info " + type}> {message} </span>
}

export default Info