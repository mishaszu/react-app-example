import {FormEventHandler, useState} from 'react';
import s from './SearchBar.module.css'

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>,
}

export default function SearchBar({onSubmit}: Props) {
  const [value, setValue] = useState('');
  const submit = (form: any) => {
    setValue('');
    onSubmit(form);
  }
  return (
    <form className={s["search-bar"]} onSubmit={submit} autoComplete="off">
      <input
        placeholder="Search"
        className={s["input"]}
        type="text"
        name="search"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        className={`${s["search-bar-button"]} ${value.length > 0 ? s['active'] : ''}`}
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
