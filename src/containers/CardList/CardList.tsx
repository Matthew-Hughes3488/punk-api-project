import React from 'react'
import { Beer } from '../../types/types'
import { Card } from '../Card/Card'

type cardListProps = {
    beers: Beer[]
}

export const CardList = ({beers}: cardListProps) => {
  return (
    <section>
        {beers.map((beer) =>{
            return <Card beer={beer}/>
        })}
    </section>
  )
}
