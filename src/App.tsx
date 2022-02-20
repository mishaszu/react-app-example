import {useMemo, useState} from 'react'
import './App.scss'
import Banner from './components/Banner'
import SearchBar from './components/SearchBar'
import JobCard, {JobOffer} from './components/JobCard'
import {SearchedTags} from './components/SearchedTags'
import data from './data'

function App() {
  const [searchTagsValues, setSearchTagsValue] = useState(["Frontend"]);

  const jobs: JobOffer[] = useMemo(() => data.map(o => ({
    ...o,
    logo: o.logo.slice(1)
  })), [])

  const addTag = (tag: string) => {
    if (
      tag.length > 0
      && searchTagsValues.every(v =>
        v.trim().toLowerCase() !== tag.trim().toLowerCase()
      )
    ) {
      setSearchTagsValue(old => old.concat(tag));
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    addTag(searchText);
    e.target.reset();
  };

  const clearTag = (tag: string) => {
    setSearchTagsValue(old => old.filter(t => t !== tag));
  }

  const clearAllTags = () => {
    setSearchTagsValue([]);
  }

  const searchFilter = (job: JobOffer) => {
    if (searchTagsValues.length > 0) {
      return searchTagsValues.every(searchTag => [job.role, job.level, ...job.tags].some(
        t =>
          t.toLowerCase() === searchTag.toLowerCase()
      ))
    } else {
      return true;
    }
  }

  return (
    <div className="App">
      <Banner />
      <div className="app-content">
        <SearchBar onSubmit={onSubmit} />
        <SearchedTags tags={searchTagsValues} clearTag={clearTag} clearAllTags={clearAllTags} />
        <div className="searched-tabs"></div>
        {
          jobs.filter(searchFilter).map(d =>
            <JobCard addTag={addTag} key={d.id} jobOffer={d} />
          )
        }
      </div>
    </div>
  )
}

export default App
