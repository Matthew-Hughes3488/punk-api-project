import { Beer } from "../../types/types";
import { Link, useParams } from "react-router-dom";

type BeerInfoProps = {
  beers: Beer[];
};

export const BeerInfo = ({ beers }: BeerInfoProps) => {
  const { id } = useParams();
  const beerId = id ? parseInt(id) : -1;

  const beer = beers.find((beer) => beer.id == beerId);
  if (!beer) return <p>Couldn't find the beers page</p>;

  return (
    <section className="beer-info-page">
      <Link to="/">
        <h1>Return</h1>
      </Link>
      <h1 className="beer-info-page__name">{`${beer.name} - ${beer.tagline}`}</h1>

      <section>
        <h2>Description</h2>
        <p>{beer.description}</p>
      </section>

      <section>
        <h2>Ingredients</h2>
        <h3>Malts</h3>
        <ul>
          {beer.ingredients.malt.map((maltIngredient) => {
            return (
              <li>{`${maltIngredient.name} - ${maltIngredient.amount.value} ${maltIngredient.amount.unit}`}</li>
            );
          })}
        </ul>
        <h3>Hops</h3>
        <ul>
          {beer.ingredients.hops.map((hop) => {
            return (
              <li>{`${hop.name} - ${hop.amount.value} ${hop.amount.unit}`}</li>
            );
          })}
        </ul>
        <h3>Yeast</h3>
        <ul>
          <li>{beer.ingredients.yeast}</li>
        </ul>
      </section>

      <section>
        <h2>Food Pairings</h2>
        <ul>
          {beer.food_pairing.map((food) => {
            return <li>{food}</li>;
          })}
        </ul>
      </section>
    </section>
  );
};
