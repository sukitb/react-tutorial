import './Card.css'

export default function Card(props) {

    return (
        <div className='card'>
            <img className="card-image" src={props.image_url} />
            <p>{props.name}</p>
        </div>
    )
}