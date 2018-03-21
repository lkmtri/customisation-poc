export const deepUpdate = (obj, path = [], value) => {
  const lastKey = path.pop()
  const loc = path.splice(-1, 1).reduce((acc, cur) => {
    if (!obj[cur]) obj[cur] = {}
    return obj[cur]
  }, obj)
  loc[lastKey] = value
}
