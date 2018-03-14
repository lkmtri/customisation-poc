export const initialState = {
  currentAction: {}
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state, currentAction: action }
  }
}
