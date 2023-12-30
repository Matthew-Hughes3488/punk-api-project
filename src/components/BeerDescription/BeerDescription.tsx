import React from 'react'
import { Beer } from '../../types/types'
import "./BeerDescription.scss"

type BeerDescriptionProps = {
    beer: Beer;
}

export const BeerDescription = ({beer}: BeerDescriptionProps) => {
  return (
    <section>
    <h2 className="beer-info-page__description-title">Description</h2>
    <p className="beer-info-page__description-text">{beer.description}</p>
  </section>
  )
}
