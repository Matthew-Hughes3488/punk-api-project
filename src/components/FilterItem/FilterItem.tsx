import React from "react";

type filterItempProps = {
  label: string;
  //Add function here later
};

export const FilterItem = ({ label }: filterItempProps) => {
  return (
    <>
      <label htmlFor="checkbox">{label}</label>
      <input type="checkbox" id="checkbox"></input>
    </>
  );
};
