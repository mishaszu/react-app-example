import "./JobCard.scss"
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

interface Props  {
  jobOffer: JobOffer,
  addTag(tag: string): void,
  styles: any
}

export default function JobCard({jobOffer, addTag, styles}: Props) {
  const tags = [jobOffer.role, jobOffer.level, ...jobOffer.tags]
  return <animated.div className="job-card" style={styles}>
    <div className="left-side">
      <div className="img-wrapper">
        <img src={jobOffer.logo} alt={`${jobOffer.company} logo`} />
      </div>
      <div className="info-wrapper">
        <div className="company-wrapper">
          <p> {jobOffer.company}
            {jobOffer.new &&
              <span className="light">
                NEW!
              </span>
            }
            {jobOffer.new &&
              <span className="dark">
                FEATURED
              </span>
            }
          </p>
        </div>
        <p className="position">{jobOffer.position}</p>
        <div className="extra-info">
          <p>{jobOffer.postedAt}</p>
          <div className="dot" />
          <p>{jobOffer.type}</p>
          <div className="dot" />
          <p>{jobOffer.location}</p>
        </div>
      </div>
    </div>
    <div className="tags-wrapper">
      {
        tags.map(t => <p onClick={_ => addTag(t)} key={`${jobOffer.id}-${t}`} className="tag">{t}</p>)
      }
    </div>
  </animated.div >
}
