import { BeerIngredientList } from "../../components/BeerIngredientList/BeerIngredientList";
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

  const foodPairingsHMTL = (
    <section>
      <h2>Food Pairings</h2>
      <ul>
        {beer.food_pairing.map((food) => {
          return <li>{food}</li>;
        })}
      </ul>
    </section>
  );

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
      <BeerIngredientList beer={beer}/>
      {foodPairingsHMTL}
    </section>
  );
};
