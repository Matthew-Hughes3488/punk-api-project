import { Beer } from "../../types/types"

type cardProps = {
    beer: Beer
}

export const Card = ({beer}: cardProps) => {
  return (
    <section>
        <img src={beer.image_url} alt="" />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
    </section>
  )
}
