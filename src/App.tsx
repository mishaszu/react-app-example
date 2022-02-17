import {useMemo, useState} from 'react'
import './App.scss'
import Banner from './components/Banner'
import SearchBar from './components/SearchBar'
import JobCard, {JobOffer} from './components/JobCard'
import data from './data'

function App() {
  console.log(data)

  const [searchValue, setSearchValue] = useState("");

  const jobs: JobOffer[] = useMemo(() => data.map(o => ({
    ...o,
    logo: o.logo.slice(1)
  })), [])

  const onSubmit = (e: any) => {
    e.preventDefault();
    setSearchValue(e.target.search.value);
    e.target.reset();
  };

  return (
    <div className="App">
      <Banner />
      <div className="app-content">
        <SearchBar value={searchValue} onSubmit={onSubmit} />
        <div className="searched-tabs"></div>
        {
          jobs.map(d =>
            <JobCard key={d.id} jobOffer={d} />
          )
        }
      </div>
    </div>
  )
}

export default App
