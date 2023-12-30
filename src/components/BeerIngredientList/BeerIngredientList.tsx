import { Beer } from "../../types/types"
import "./BeerIngredientList.scss"

type BeerIngredientListProps = {
    beer: Beer
}

export const BeerIngredientList = ({beer} : BeerIngredientListProps) => {
  return (
    <section className='ingredients-container'>
      <h2 className='ingredients-container__title'>Ingredients</h2>
      <section className="ingredient-container"></section>
      <h3 className='ingredient-container__title'>Malts</h3>
      <ul className='ingredient-container__list'>
        {beer.ingredients.malt.map((maltIngredient) => {
          return (
            <li className='ingredient-container__malt-list--item'>{`${maltIngredient.name} - ${maltIngredient.amount.value} ${maltIngredient.amount.unit}`}</li>
          );
        })}
      </ul>
      <section className="ingredient-container"></section>
      <h3 className='ingredient-container__title'>Hops</h3>
      <ul className='ingredient-container__list'>
        {beer.ingredients.hops.map((hop) => {
          return (
            <li className='ingredient-container__list--item'>{`${hop.name} - ${hop.amount.value} ${hop.amount.unit}`}</li>
          );
        })}
      </ul>
      <h3 className='ingredient-container__title'>Yeast</h3>
      <ul>
        <li className='ingredient-container__list'>{beer.ingredients.yeast}</li>
      </ul>
    </section>
  );
}
