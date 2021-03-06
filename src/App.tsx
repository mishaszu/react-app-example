import {useMemo, useState} from 'react'
import {useTransition} from 'react-spring'
import s from './App.module.css'
import Banner from './components/Banner'
import SearchBar from './components/SearchBar'
import JobCard, {JobOfferComplete} from './components/JobCard'
import SearchedTags from './components/SearchedTags'
import data from './data'
import {searchFilterOffersByTags, dataToCompleteData} from './utilities'

function App() {
  const [searchTagsValues, setSearchTagsValue] = useState([] as string[]);

  const jobs: JobOfferComplete[] = useMemo(() => dataToCompleteData(data), [])

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

  const searchFilter = searchFilterOffersByTags(searchTagsValues);

  const transitions = useTransition(jobs.filter(searchFilter), {
    from: {opacity: 0, y: 10, maxHeight: 0, padding: "0px 0px 0px 0px", margin: "0px 0px"},
    enter: {opacity: 1, y: 0, maxHeight: 500, padding: "var(--card-padding)", margin: "12px 0px"},
    leave: {opacity: 0, y: 10, maxHeight: 0, padding: "0px 0px 0px 0px", margin: "0px 0px"},
    delay: 0,
    trail: 100
  });

  return (
    <div className={s["App"]}>
      <Banner />
      <div className={s["app-content"]}>
        <SearchBar onSubmit={onSubmit} />
        <SearchedTags tags={searchTagsValues} clearTag={clearTag} clearAllTags={clearAllTags} />
        {
          transitions((styles, item) => {
            return <JobCard styles={styles} addTag={addTag} key={item.id} jobOffer={item} />
          })
        }
      </div>
    </div>
  )
}

export default App
