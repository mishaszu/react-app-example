import {useTransition, animated} from 'react-spring'
import s from './SearchedTags.module.css'

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
    <div className={`${s['searched-tags']} ${tags.length === 0 ? s['collapsed'] : s['expanded']}`}>
      <div className={s["tags"]}>
        {
          transitions((style, item) => {
            return <animated.div
              className={s["tag"]}
              key={`searched-${item}`}
              style={style}
            >
              <p className={s["tag-title"]}>{item}</p>
              <div className={s["x-wrapper" ]}onClick={_ => clearTag(item)}>
                <div className={s["x-wrapper-inner"]}>
                  <div className={s["x-part-1" ]}/>
                  <div className={s["x-part-2" ]}/>
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
      <p className={s["tag-clear" ]}onClick={_ => clearAllTags()}>Clear All</p>
    </div>
  );
}
