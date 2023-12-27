import {ChangeEventHandler} from 'react'
import "./SearchBox.scss"

type searchBoxProps = {
  onSearchBoxChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBox = ({onSearchBoxChange}: searchBoxProps) => {
  return (
    <div>
        <input className='search-box' type="text" placeholder='Search...' onChange={onSearchBoxChange}/>
    </div>
  )
}
