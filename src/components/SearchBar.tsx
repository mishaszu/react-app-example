import './SearchBar.scss'

interface Props {
  onSubmit: any,
  value: string
}

export default function SearchBar({onSubmit, value}: Props) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input placeholder="Search" type="text" name="search" />
      <button type="submit">Submit</button>
    </form>
  )
}
