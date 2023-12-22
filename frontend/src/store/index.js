import { createStore } from 'vuex'
import user from './modules/user'
import event from './modules/event'
import peoples from './modules/people'

export default createStore({
  modules: {
    user,
    peoples,
    event
  }
})
