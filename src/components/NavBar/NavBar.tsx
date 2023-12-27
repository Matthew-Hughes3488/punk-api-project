import { SearchBox } from "../SearchBox/SearchBox";
import { FilterList } from "../FilterList/FilterList";
import { ChangeEventHandler } from "react";
import "./NavBar.scss"

type navBarProps = {
  onSearchBoxChange: ChangeEventHandler<HTMLInputElement>;
  onABVChange: ChangeEventHandler<HTMLInputElement>;
  onClassicRangeChange: ChangeEventHandler<HTMLInputElement>;
  onAcidityChange: ChangeEventHandler<HTMLInputElement>;
};

export const NavBar = ({
  onSearchBoxChange,
  onABVChange,
  onAcidityChange,
  onClassicRangeChange,
}: navBarProps) => {
  return (
    <section className="nav-bar">
      <SearchBox onSearchBoxChange={onSearchBoxChange} />
      <FilterList
        onABVChange={onABVChange}
        onAcidityChange={onAcidityChange}
        onClassicRangeChange={onClassicRangeChange}
      />
    </section>
  );
};
