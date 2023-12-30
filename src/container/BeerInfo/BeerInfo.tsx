import { BeerIngredientList } from "../../components/BeerIngredientList/BeerIngredientList";
import { FoodPairingList } from "../../components/FoodPairingList/FoodPairingList";
import { Beer } from "../../types/types";
import { Link, useParams } from "react-router-dom";
import "./BeerInfo.scss";
import { BeerDescription } from "../../components/BeerDescription/BeerDescription";

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
      <section>
        <h1 className="beer-info-page__name">{`${beer.name} - ${beer.tagline}`}</h1>
        <BeerDescription beer={beer} />
        <BeerIngredientList beer={beer} />
        <FoodPairingList beer={beer} />
      </section>
      <section className="beer-info-page__image-container">
        <img
          className="beer-info-page__image-container--image"
          src={beer.image_url}
          alt="image of the beer"
        />
      </section>
    </section>
  );
};
