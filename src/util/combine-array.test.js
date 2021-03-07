import { combineArray } from "."

describe("Test the combine-array functionality", () => {
  it("should return an empty array", () => {
    const expected = []
    const result = combineArray()
    expect(result).toEqual(expected)
  })
  it("should return the correct result", () => {
    const expected = [[1,2],[3]]
    const result = combineArray([1,2,3], 2)
    expect(result).toEqual(expected)
  })
})
