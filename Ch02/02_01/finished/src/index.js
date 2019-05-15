import C from './constants'
import { skiDay } from './store/reducers'

const state = null

const action = {
   type: C.ADD_DAY,
   payload: {
      "resort": "resortTest",
      "date": "2019-12-5",
      "powder": true,
      "backcountry": false
   }
}

const nextState = skiDay(state, action)

console.log(`
   initial state: ${state}
   action: ${JSON.stringify(action)}
   new state: ${JSON.stringify(nextState)}
`)