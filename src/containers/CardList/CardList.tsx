import React from 'react'
import { Beer } from '../../types/types'
import { Card } from '../Card/Card'
import "./CardList.scss"

type cardListProps = {
    beers: Beer[]
}

export const CardList = ({beers}: cardListProps) => {
  return (
    <section className='beer-cards'>
        {beers.map((beer) =>{
            return <Card beer={beer}/>
        })}
    </section>
  )
}
