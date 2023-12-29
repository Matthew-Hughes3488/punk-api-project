import React from 'react'
import { Beer } from "../../types/types"

type BeerIngredientListProps = {
    beer: Beer
}

export const BeerIngredientList = ({beer} : BeerIngredientListProps) => {
  return (
    <section className='beer-ingredients'>
      <h2 className='beer-ingredients__title'>Ingredients</h2>
      <h3 className='beer-ingredients__malt-title'>Malts</h3>
      <ul className='beer-ingredients__malt-list'>
        {beer.ingredients.malt.map((maltIngredient) => {
          return (
            <li className='beer-ingredients__malt-list--item'>{`${maltIngredient.name} - ${maltIngredient.amount.value} ${maltIngredient.amount.unit}`}</li>
          );
        })}
      </ul>
      <h3 className='beer-ingredients__hop-title'>Hops</h3>
      <ul className='beer-ingredients__hop-list'>
        {beer.ingredients.hops.map((hop) => {
          return (
            <li className='beer-ingredients__hop-list--item'>{`${hop.name} - ${hop.amount.value} ${hop.amount.unit}`}</li>
          );
        })}
      </ul>
      <h3 className='beer-ingredients__yeast-title'>Yeast</h3>
      <ul>
        <li className='beer-ingredients__yeast-name'>{beer.ingredients.yeast}</li>
      </ul>
    </section>
  );
}
