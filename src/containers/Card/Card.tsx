import { Beer } from "../../types/types"
import "./Card.scss"

type cardProps = {
    beer: Beer
}

export const Card = ({beer}: cardProps) => {
  return (
    <section className="beer-cards__card">
        <img className="beer-cards__card--image" src={beer.image_url} alt="" />
        <h1 className="beer-cards__card--title">{`${beer.name} - ${beer.tagline}`}</h1>
        <p className="beer-cards__card--description">{beer.description}</p>
    </section>
  )
}
