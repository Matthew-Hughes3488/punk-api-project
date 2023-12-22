import { ChangeEventHandler } from "react";

type filterItempProps = {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const FilterItem = ({ label, onChange}: filterItempProps) => {
  return (
    <>
      <label htmlFor="checkbox">{label}</label>
      <input type="checkbox" id="checkbox" onChange={onChange}></input>
    </>
  );
};
