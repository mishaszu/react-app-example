import {FormEventHandler} from 'react';
import s from './SearchBar.module.css'

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>,
}

export default function SearchBar({onSubmit}: Props) {
  return (
    <form className={s["search-bar" ]}onSubmit={onSubmit}  autoComplete="off">
      <input placeholder="Search" className={s["input"]} type="text" name="search" />
      <button className={s["search-bar-button" ]}type="submit">Submit</button>
    </form>
  )
}
