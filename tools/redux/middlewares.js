export const loggerMiddlewares = (store) => (next) => (action) => {
  console.groupCollapsed(action.type)
  console.info('prev State: ', store.getState()['@@customisation'])
  console.info('dispatching: ', action)
  next(action)
  console.info('next State: ', store.getState()['@@customisation'])
  console.groupEnd()
}
