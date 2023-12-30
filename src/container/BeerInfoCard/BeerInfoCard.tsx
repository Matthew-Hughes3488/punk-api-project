import { Link } from "react-router-dom";
import { BeerDescription } from "../../components/BeerDescription/BeerDescription";
import { BeerIngredientList } from "../../components/BeerIngredientList/BeerIngredientList";
import { FoodPairingList } from "../../components/FoodPairingList/FoodPairingList";
import { Beer } from "../../types/types";
import { useRef, useEffect } from "react";
import "./BeerInfoCard.scss";

type BeerInfoCard = {
  beer: Beer;
};

export const BeerInfoCard = ({ beer }: BeerInfoCard) => {
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
  );
};
