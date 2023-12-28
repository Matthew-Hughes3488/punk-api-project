import { Beer } from "../../types/types";
import { useParams } from "react-router-dom";

type BeerInfoProps = {
  beers: Beer[];
};

export const BeerInfo = ({ beers }: BeerInfoProps) => {
  const { id } = useParams();
  const beerId = id ? parseInt(id) : -1;

  const beer = beers.find((beer) => beer.id == beerId);
  if (!beer) return <p>Couldn't find the beers page</p>;

  return (
    <section className="beer-info">
      <h1>{`${beer.name} - ${beer.tagline}`}</h1>
      <section>
        <h2>Description</h2>
        <p>{beer.description}</p>
      </section>
    </section>
  );
};
