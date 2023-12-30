import { Beer } from '../../types/types'
import "./BeerDescription.scss"

type BeerDescriptionProps = {
    beer: Beer;
}

export const BeerDescription = ({beer}: BeerDescriptionProps) => {
  return (
    <section className='description-container'>
    <h2 className="description-container__title">Description</h2>
    <p className="description-container__text">{beer.description}</p>
  </section>
  )
}
