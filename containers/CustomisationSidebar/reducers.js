export const initialState = {
  customisation: {
    color: 'red'
  }
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, customisation: { ...state.customisation, color: action.payload } }
    default:
      return state
  }
}
