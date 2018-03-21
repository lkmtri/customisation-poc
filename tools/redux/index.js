export const makeSubStore = (storeKey, actions, reducers, initialState) => ({
  storeKey,
  actions: {
    [storeKey]: actions
  },
  reducers: {
    [storeKey]: reducers
  },
  initialState: {
    [storeKey]: initialState
  }
})
