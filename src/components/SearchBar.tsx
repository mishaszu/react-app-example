import {FormEventHandler} from 'react';
import './SearchBar.scss'

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>,
}

export default function SearchBar({onSubmit}: Props) {
  return (
    <form className="search-bar" onSubmit={onSubmit}  autoComplete="off">
      <input placeholder="Search" type="text" name="search" />
      <button className="search-bar-button" type="submit">Submit</button>
    </form>
  )
}
