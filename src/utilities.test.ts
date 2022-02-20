import data from './data';
import {searchFilterOffersByTags, dataToCompleteData} from './utilities';

const mappedData = dataToCompleteData(data);

describe("map data to complete object", () => {
  const result = dataToCompleteData(data);
  expect(result[0].completeTags).toHaveLength(5);
  expect(result[1].completeTags.join("")).toBe([
    "Fullstack",
    "Midweight",
    "Python",
    "React",
  ].join(""));
})

describe("filter by tags", () => {
  test("filter by no value", () => {
    const filterValue = [] as string[];
    const result = mappedData.filter(searchFilterOffersByTags(filterValue));
    expect(result).toHaveLength(data.length);
  })

  test("filter by single tag", () => {
    const filterValue = ["Frontend"];
    const result = mappedData.filter(searchFilterOffersByTags(filterValue));
    expect(result).toHaveLength(6);
  })

  test("filter by multiple tag", () => {
    const filterValue = ["Frontend", "React"];
    const result = mappedData.filter(searchFilterOffersByTags(filterValue));
    expect(result).toHaveLength(2);

    const filterValue2 = ["Frontend", "html", "senior"];
    const result2 = mappedData.filter(searchFilterOffersByTags(filterValue2));
    expect(result2).toHaveLength(1);
  })

  test("filter by single wrong value", () => {
    const filterValue = ["test"];
    const result = mappedData.filter(searchFilterOffersByTags(filterValue));
    expect(result).toHaveLength(0);

    const filterValue2 = ["react", "test"];
    const result2 = mappedData.filter(searchFilterOffersByTags(filterValue2));
    expect(result2).toHaveLength(0);
  })

  test("filter by multiple wrong value", () => {
    const filterValue = ["react", "test", "rapapa"];
    const result = mappedData.filter(searchFilterOffersByTags(filterValue));
    expect(result).toHaveLength(0);
  })
})
