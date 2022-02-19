import './SearchedTags.scss'

export function SearchedTags(
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
  return <div className="searched-tags">
    <div className="tags">
      {
        tags.map(t =>
          <div className="tag" key={`searched-${t}`} onClick={_ => clearTag(t)}>
            <p>{t}</p>
            <div className="x-wrapper">
              <div className="x-wrapper-2">
                <div className="x-part1" />
                <div className="x-part2" />
              </div>
            </div>
          </div>
        )
      }
    </div>
    {
      tags.length > 0 && <p className="tag-clear" onClick={_ => clearAllTags()}>Clear All</p>
    }
  </div>
}
