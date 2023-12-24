import { createStore } from 'vuex'
import user from './modules/user'
import event from './modules/event'
import peoples from './modules/people'
import space from './modules/space'
import equipment from './modules/equipment'

export default createStore({
  modules: {
    user,
    peoples,
    space,
    equipment,
    event
  }
})
