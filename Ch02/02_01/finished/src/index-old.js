import C from './constants'
import { allSkiDays } from './store/reducers'

const state = [
   {
      "resort": "Kirkwood",
      "date": "2016-12-7",
      "powder": true,
      "backcountry": false
   },
   {
      "resort": "NEW",
      "date": "2016-12-6",
      "powder": true,
      "backcountry": true
   }
]

const action = {
   type: C.REMOVE_DAY,
   payload: "2016-12-6"
}

const nextState = allSkiDays(state, action)

console.log(`
   initial state: ${JSON.stringify(state)}
   action: ${JSON.stringify(action)}
   new state: ${JSON.stringify(nextState)}
`)
