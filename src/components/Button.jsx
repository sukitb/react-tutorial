import '../App.css'

export default function TButton (props) {

    return (
        <button className="button">
            {props.label}
        </button>
    )
}