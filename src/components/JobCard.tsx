import s from "./JobCard.module.css"
import {animated} from 'react-spring'

export interface JobOffer {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  type: string,
  location: string,
  tags: string[],
}

export interface JobOfferComplete extends JobOffer {
  completeTags: string[]
}

interface Props {
  jobOffer: JobOfferComplete,
  addTag(tag: string): void,
  styles: any
}

export default function JobCard({jobOffer, addTag, styles}: Props) {
  return (
    <animated.div className={s["job-card"]} style={styles}>
      <div className={s["left-side"]}>
        <div className={s["img-wrapper"]}>
          <img src={jobOffer.logo} alt={`${jobOffer.company} logo`} />
        </div>
        <div className={s["info-wrapper"]}>
          <div className={s["company-wrapper"]}>
            <p className={s["offer-headline"]}> {jobOffer.company}
              {jobOffer.new &&
                <span className={s["light"]}>
                  NEW!
                </span>
              }
              {jobOffer.featured &&
                <span className={s["dark"]}>
                  FEATURED
                </span>
              }
            </p>
          </div>
          <p className={s["position"]}>{jobOffer.position}</p>
          <div className={s["extra-info"]}>
            <p className={s["info-text"]}>{jobOffer.postedAt}</p>
            <div className={s["dot"]} />
            <p className={s["info-text"]}>{jobOffer.type}</p>
            <div className={s["dot"]} />
            <p className={s["info-text"]}>{jobOffer.location}</p>
          </div>
        </div>
      </div>
      <div className={s["tags-wrapper"]}>
        {
          jobOffer.completeTags.map(t => <p onClick={_ => addTag(t)} key={`${jobOffer.id}-${t}`} className={s["tag"]}>{t}</p>)
        }
      </div>
    </animated.div >
  );
}
