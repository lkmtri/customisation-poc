export const deepUpdate = (obj, path = [], value) => {
  const lastKey = path.pop()
  const loc = path.reduce((acc, cur) => {
    if (acc[cur] === undefined) acc[cur] = {}
    return acc[cur]
  }, obj)
  loc[lastKey] = value
}
