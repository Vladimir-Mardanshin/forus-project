export default {

    state: {
        equipments: [
            {
                id: 0,
                title: "Камера",
                information: "Модель: canon e-120",
                times: [
                    {
                        hour: "08:00-09:00",
                        employment: 0
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
                        employment: 1
                    },
                    {
                        hour: "12:00-13:00",
                        employment: 1
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
                title: "Микрофон",
                information: "Вернуть на место!",
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
                        employment: 1
                    },
                    {
                        hour: "16:00-17:00",
                        employment: 1
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
        getEquipment(state) {
            return state.equipments;
        }
    },

    mutations: {
    },

    actions: {}

};