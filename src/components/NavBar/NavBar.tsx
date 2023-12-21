import { SearchBox } from '../SearchBox/SearchBox'
import { FilterList } from '../FilterList/FilterList'
import { ChangeEventHandler } from 'react';

type navBarProps = {
  onSearchBoxChange: ChangeEventHandler<HTMLInputElement>;
}

export const NavBar = ({onSearchBoxChange} : navBarProps) => {
  return (
    <section>
        <SearchBox onSearchBoxChange={onSearchBoxChange}/>
        <FilterList/>
    </section>
  )
}
