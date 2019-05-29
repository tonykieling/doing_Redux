import C from './constants.js'
import { allSkiDays, goal} from './initialState.json'

console.log(`
  goal= ${goal}
  many days: ${allSkiDays.length}

  Constants (actions):
  ${Object.keys(C).join('\n     ')}
`)