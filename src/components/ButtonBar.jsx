import "../css/buttonbar.css"


export default function ButtonBar (props) {
    const {
        title,
        onClick,
    } = props

    return (
        <button className='button-bar' onClick={onClick}>{title}</button>
    )
}