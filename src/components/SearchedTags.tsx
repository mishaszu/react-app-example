import {useTransition, animated} from 'react-spring'
import './SearchedTags.scss'

export default function SearchedTags(
  {
    tags,
    clearTag,
    clearAllTags
  }:
    {
      tags: string[],
      clearTag: (tag: string) => void,
      clearAllTags(): void
    }
) {
  const transitions = useTransition(tags, {
    from: {opacity: 0, y: -10},
    enter: {opacity: 1, y: 0},
    leave: {opacity: 0, y: -10},
    delay: 0,
  });

  return (
    <div className={`searched-tags ${tags.length === 0 ? 'collapsed' : 'expanded'}`}>
      <div className="tags">
        {
          transitions((style, item) => {
            return <animated.div className="tag" key={`searched-${item}`}
              style={style}
            >
              <p>{item}</p>
              <div className="x-wrapper" onClick={_ => clearTag(item)}>
                <div className="x-wrapper-2">
                  <div className="x-part1" />
                  <div className="x-part2" />
                </div>
              </div>
            </animated.div>
          })
        }
      </div>
        {/*
          // without animation
      tags.length > 0
        ? <p className="tag-clear" onClick={_ => clearAllTags()}>Clear All</p>
        : null
        */}
      <p className="tag-clear" onClick={_ => clearAllTags()}>Clear All</p>
    </div>
  );
}
