
export const combineArray = (collection, groupBy) => Array
  .from({length: groupBy}, (_, key) => collection
    .slice(
      key * Math.ceil(collection.length / groupBy),
      (key + 1) * Math.ceil(collection.length / groupBy)
    ))
