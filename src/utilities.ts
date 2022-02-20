import {JobOfferComplete} from "./components/JobCard";

export const searchFilterOffersByTags = (searchTags: string[]) => (job: JobOfferComplete) => {
  if (searchTags.length > 0) {
    return searchTags.every(searchTag => job.completeTags.some(
      t =>
        t.toLowerCase() === searchTag.toLowerCase()
    ))
  } else {
    return true;
  }
}
