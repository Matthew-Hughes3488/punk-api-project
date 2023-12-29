import { BeerIngredientList } from "../../components/BeerIngredientList/BeerIngredientList";
import { FoodPairingList } from "../../components/FoodPairingList/FoodPairingList";
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
        <h1 className="beer-info__return-link">Return</h1>
      </Link>
      <h1 className="beer-info-page__name">{`${beer.name} - ${beer.tagline}`}</h1>
      <section>
        <h2 className="beer-info-page__description-title">Description</h2>
        <p className="beer-info-page__description-text">{beer.description}</p>
      </section>
      <BeerIngredientList beer={beer}/>
      <FoodPairingList beer={beer}/>
    </section>
  );
};
