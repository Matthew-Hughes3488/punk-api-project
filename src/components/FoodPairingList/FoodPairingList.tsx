import { Beer } from "../../types/types";
import "./FoodPairingList.scss"

type FoodPairingListProps = {
  beer: Beer;
};

export const FoodPairingList = ({ beer }: FoodPairingListProps) => {
  return (
    <section className="pairing-container">
      <h2 className="pairing-container__title">Food Pairings</h2>
      <ul className="pairing-container__list">
        {beer.food_pairing.map((food) => {
          return <li className="pairing-container__list--item">{food}</li>;
        })}
      </ul>
    </section>
  );
};
