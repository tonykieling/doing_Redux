import C from '../constants.js'

export const goal = (state, action) => {
  if (action.type === C.SET_GOAL)
    return action.payload
  return state
}