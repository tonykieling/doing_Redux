import C from '../constants.js'

export const goal = (state, action) =>
  (action.type === C.SET_GOAL) ?
    action.payload :
    state

export const skiDay = (state = null, action) =>
  (action.type === C.ADD_DAY) ?
    action.payload :
  state

export const errors = (state = [], action) => {
  switch(action.type) {
    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
    case C.CLEAR_ERROR:
      return state.filter((el, i) => i !== action.payload)
    default:
      return state
  }
}

export const allSkiDays = (state = [], action) => {
  switch(action.type) {
    case C.ADD_DAY:
      return [
        ...state,
        skiDay(null, action)
      ]
    default:
      state
  }
}
