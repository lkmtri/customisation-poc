export const isMember = (array, element, getArrayItemField = x => x, getElementField = x => x) =>
  array.reduce((acc, item) => acc || getArrayItemField(item) === getElementField(element), false)
