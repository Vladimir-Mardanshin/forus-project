export default {

    state: {
        space: [
            {
                id: 0,
                title: "Коворкинг ИГУ",
                information: "Здесь можно написать любую информацию о коворкинге",
                times: [
                    {
                        hour: "08:00-09:00",
                        employment: 0
                    },
                    {
                        hour: "09:00-10:00",
                        employment: 0
                    },
                    {
                        hour: "10:00-11:00",
                        employment: 0
                    },
                    {
                        hour: "11:00-12:00",
                        employment: 0
                    },
                    {
                        hour: "12:00-13:00",
                        employment: 1
                    },
                    {
                        hour: "13:00-14:00",
                        employment: 1
                    },
                    {
                        hour: "14:00-15:00",
                        employment: 1
                    },
                    {
                        hour: "15:00-16:00",
                        employment: 0
                    },
                    {
                        hour: "16:00-17:00",
                        employment: 0
                    },
                    {
                        hour: "17:00-18:00",
                        employment: 0
                    },
                    {
                        hour: "18:00-19:00",
                        employment: 0
                    },
                    {
                        hour: "19:00-20:00",
                        employment: 0
                    }
                ]
            },
            {
                id: 1,
                title: "Переговорная",
                information: "Здесь можно написать любую информацию о переговорной",
                times: [
                    {
                        hour: "08:00-09:00",
                        employment: 1
                    },
                    {
                        hour: "09:00-10:00",
                        employment: 1
                    },
                    {
                        hour: "10:00-11:00",
                        employment: 1
                    },
                    {
                        hour: "11:00-12:00",
                        employment: 0
                    },
                    {
                        hour: "12:00-13:00",
                        employment: 0
                    },
                    {
                        hour: "13:00-14:00",
                        employment: 0
                    },
                    {
                        hour: "14:00-15:00",
                        employment: 0
                    },
                    {
                        hour: "15:00-16:00",
                        employment: 0
                    },
                    {
                        hour: "16:00-17:00",
                        employment: 0
                    },
                    {
                        hour: "17:00-18:00",
                        employment: 1
                    },
                    {
                        hour: "18:00-19:00",
                        employment: 1
                    },
                    {
                        hour: "19:00-20:00",
                        employment: 1
                    }
                ]
            }
        ]
    },

    getters: {
        getSpace(state) {
            return state.space;
        }
    },

    mutations: {
    },

    actions: {}

};