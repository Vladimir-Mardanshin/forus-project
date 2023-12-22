export default {

    state: {
      name: "Владимир",
      firstName: "Марданшин",
      email: "vova_mardanshin@mail.ru",
      root: "admin",
      organization: "Форус",
      entrance: false
    },

    getters: {
      getUser(state) {
        return state.name + " " + state.firstName;
      },
      getRoot(state) {
        return state.root;
      },
      getOrganization(state) {
        return state.organization;
      },
      getEntrance(state) {
        return state.entrance;
      },
      getEmail(state) {
        return state.email;
      },
    },

    mutations: {
      changeEntrance(state, newEntrance) {
        state.entrance = newEntrance;
      },
      changeEmail(state, newEmail) {
        state.email = newEmail;
      }
    },

    actions: {}
    
  };