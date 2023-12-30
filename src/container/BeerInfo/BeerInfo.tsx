import { Beer } from "../../types/types";
import { Link, useParams } from "react-router-dom";
import "./BeerInfo.scss";
import { BeerInfoCard } from "../BeerInfoCard/BeerInfoCard";

type BeerInfoProps = {
  beers: Beer[];
};

export const BeerInfo = ({ beers }: BeerInfoProps) => {
  const { id } = useParams();
  const beerId = id ? parseInt(id) : -1;

  const beer = beers.find((beer) => beer.id == beerId);
  if (!beer) return <p>Couldn't find the beers page</p>;

  return (
    <section className="beer-info-container">
      <BeerInfoCard beer={beer}/>
    </section>
  );
};
