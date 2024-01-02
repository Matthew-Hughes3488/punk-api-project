import { Beer } from "../../types/types"
import "./Card.scss"

type cardProps = {
    beer: Beer
}

export const Card = ({beer}: cardProps) => {

  return (
    <section className="beer-card">
        <img className="beer-card__image" src={beer.image_url} alt="" />
        <h1 className="beer-card__title">{`${beer.name} - ${beer.tagline}`}</h1>
        <p className="beer-card__description">{beer.description}</p>
    </section>
  )
}
