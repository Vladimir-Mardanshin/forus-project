export default {

    state: {
        items: [
            {
                id: 0,
                name: "Съемки в первомайском",
                guarantor: "Иванов И. В.",
                jobTitle: "Фотограф",
                time: "10:00 - 12:00",
                unformation: "Срочно нужны фотографии!"
            }
        ]
    },

    getters: {
        getItems(state) {
            return state.items;
        }
    },

    mutations: {
    },

    actions: {}

};