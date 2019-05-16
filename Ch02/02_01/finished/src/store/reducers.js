import C from '../constants.js'
import { combineReducers } from 'redux'

export const goal = (state = 10, action) =>
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
      const hasAlreadyDay = state.some(skiDay => skiDay.date === action.payload)      
      return (hasAlreadyDay) ?
        state :
          [
            ...state,
            skiDay(null, action)
          ]
    case C.REMOVE_DAY:
      return state.filter(skiDay => skiDay.date !== action.payload)
    default:
      return state
  }
}

export const fetching = (state = false, action) => {
  switch(action.type) {
    case "FETCH_RESORT_NAMES" :
      return true
    case "CANCEL_FETCHING" :
      return false
    case "CHANGE_SUGGESTIONS" :
      return false
    default :
      return state
    }
}

export const suggestions = (state = [], action) => {
  switch(action.type) {
    case "CLEAR_SUGGESTIONS" :
      return []
    case "CHANGE_SUGGESTIONS" :
      return action.payload
    default :
      return state
    }
}

export default combineReducers({
  allSkiDays,
  goal,
  errors,
  resortNames: combineReducers({
    fetching,
    suggestions
  })
})
