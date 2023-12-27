import { ChangeEventHandler } from "react";
import "./FilterItem.scss"

type filterItempProps = {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const FilterItem = ({ label, onChange}: filterItempProps) => {
  return (
    <section className="filter-item">
      <label className="filter-item__label" htmlFor="checkbox">{label}</label>
      <input className="filter-item-checkbox" type="checkbox" id="checkbox" onChange={onChange}></input>
    </section>
  );
};
