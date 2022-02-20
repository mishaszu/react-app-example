import {JobOffer, JobOfferComplete} from "./components/JobCard";

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

export const dataToCompleteData = (data: JobOffer[]): JobOfferComplete[] =>
  data.map(o => ({
    ...o,
    logo: o.logo.slice(1),
    completeTags: [o.role, o.level, ...o.tags]
  }));
