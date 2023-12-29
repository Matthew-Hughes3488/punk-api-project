import { Beer } from "../../types/types";

type FoodPairingListProps = {
  beer: Beer;
};

export const FoodPairingList = ({ beer }: FoodPairingListProps) => {
  return (
    <section className="food-pairings">
      <h2 className="food-pairings__title">Food Pairings</h2>
      <ul className="food-pairings__list">
        {beer.food_pairing.map((food) => {
          return <li className="food-pairings__list--item">{food}</li>;
        })}
      </ul>
    </section>
  );
};
