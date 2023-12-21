import {ChangeEventHandler} from 'react'

type searchBoxProps = {
  onSearchBoxChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBox = ({onSearchBoxChange}: searchBoxProps) => {
  return (
    <div>
        <input type="text" placeholder='Search...' onChange={onSearchBoxChange}/>
    </div>
  )
}
