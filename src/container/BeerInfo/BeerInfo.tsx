import { BeerIngredientList } from "../../components/BeerIngredientList/BeerIngredientList";
import { FoodPairingList } from "../../components/FoodPairingList/FoodPairingList";
import { Beer } from "../../types/types";
import { Link, useParams } from "react-router-dom";
import "./BeerInfo.scss";
import { BeerDescription } from "../../components/BeerDescription/BeerDescription";
import { useEffect, useRef } from "react";

type BeerInfoProps = {
  beers: Beer[];
};

export const BeerInfo = ({ beers }: BeerInfoProps) => {
  const { id } = useParams();
  const beerId = id ? parseInt(id) : -1;

  const beer = beers.find((beer) => beer.id == beerId);
  if (!beer) return <p>Couldn't find the beers page</p>;

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      if (container.scrollHeight > container.clientHeight) {
        container.style.height = container.scrollHeight + 10 + "px";
      }
    }
  }, [beer]);

  return (
    <section className="beer-info-container">
      <section ref={containerRef} className="beer-info-card">
        <Link to="/">
          <h1 className="beer-card-link">Return</h1>
        </Link>
        <section>
          <h1 className="beer-info-card__name">{`${beer.name} - ${beer.tagline}`}</h1>
          <BeerDescription beer={beer} />
          <BeerIngredientList beer={beer} />
          <FoodPairingList beer={beer} />
        </section>
        <section className="beer-info-card__image-container">
          <img
            className="beer-info-card__image-container--image"
            src={beer.image_url}
            alt="image of the beer"
          />
        </section>
      </section>
    </section>
  );
};
