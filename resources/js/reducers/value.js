const initialState = 'Hello, World!'

export const loadingValueReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOADING_VALUE':
      state = action.payload
      return state
    default:
      return state
  }
}

export const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      state = action.payload
      return state
    default:
      return state
  }
}
