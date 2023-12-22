export default {

    state: {
        items: [
            {
                id: 0,
                name: "Съемки в первомайском",
                guarantor: "Иванов И. В.",
                jobTitle: "Фотограф",
                time: "10:00 - 12:00",
            }
        ],
        name: "Съемки в первомайском",
        guarantor: "Иванов И. В.",
        jobTitle: "Фотограф",
        time: "10:00 - 12:00",
    },

    getters: {
        getName(state) {
            return state.name;
        },
        getGuarantor(state) {
            return state.guarantor;
        },
        getJobTitle(state) {
            return state.jobTitle;
        },
        getTime(state) {
            return state.time;
        }
        ,
        getItems(state) {
            return state.items;
        }
    },

    mutations: {
    },

    actions: {}

};