import {ChangeEventHandler} from 'react'
import "./SearchBox.scss"

type searchBoxProps = {
  onSearchBoxChange: ChangeEventHandler<HTMLInputElement>;
  type: string
  defaultText: string;
}

export const SearchBox = ({onSearchBoxChange, type, defaultText}: searchBoxProps) => {
  return (
    <div>
        <input className='search-box' type={type} placeholder={defaultText} onChange={onSearchBoxChange}/>
    </div>
  )
}
