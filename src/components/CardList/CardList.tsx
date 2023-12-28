import { Link } from 'react-router-dom'
import { Beer } from '../../types/types'
import { Card } from '../Card/Card'
import "./CardList.scss"

type cardListProps = {
    beers: Beer[]
}

export const CardList = ({beers}: cardListProps) => {
  return (
    <section className='beer-cards'>
      {beers.map((beer) => (
        <Link key={beer.id} to={`/beers/${beer.id}`}>
          <Card beer={beer} />
        </Link>
      ))}
    </section>
  )
}
