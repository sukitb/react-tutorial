import Card from "./Card"

export default function CardList(props) {
console.log(props)

return (
    <div>
    {props.artistData.map((item) => (

        <Card name={item.name} image_url={item.image_url} />

    ))}
    
    </div>
)

}