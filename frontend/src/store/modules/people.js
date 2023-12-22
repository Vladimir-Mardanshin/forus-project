export default {

    state: {
        peoples: [
            {
                id: 0,
                name: "Иван Иванов",
                jobTitle: "Фотограф",
                imgUrl: "1.png",
            },
            {
                id: 1,
                name: "Анастасия Солянкина",
                jobTitle: "Дизайнер",
                imgUrl: "2.png",
            },
            {
                id: 2,
                name: "Петр Первухин",
                jobTitle: "Водитель",
                imgUrl: "3.png",
            },
            {
                id: 3,
                name: "Бахтияр Джангиров",
                jobTitle: "Разнорабочий",
                imgUrl: "4.png",
            },
            {
                id: 4,
                name: "Игорь Панченкр",
                jobTitle: "Строитель",
                imgUrl: "5.png",
            },
        ],
    },

    getters: {
        getPeoples(state) {
            return state.peoples;
        }
    },

    mutations: {
    },

    actions: {}

};