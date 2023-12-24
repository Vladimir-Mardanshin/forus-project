export default {

    state: {
        peoples: [
            {
                id: 0,
                name: "Иван Иванов",
                jobTitle: "Фотограф",
                imgUrl: "1.png",
                information: "Лучший фотограф на свете"
            },
            {
                id: 1,
                name: "Анастасия Солянкина",
                jobTitle: "Дизайнер",
                imgUrl: "2.png",
                information: "Лучший Дизайнер на свете"
            },
            {
                id: 2,
                name: "Петр Первухин",
                jobTitle: "Водитель",
                imgUrl: "3.png",
                information: "Лучший Водитель на свете"
            },
            {
                id: 3,
                name: "Бахтияр Джангиров",
                jobTitle: "Разнорабочий",
                imgUrl: "4.png",
                information: "Лучший Разнорабочий на свете"
            },
            {
                id: 4,
                name: "Игорь Панченко",
                jobTitle: "Строитель",
                imgUrl: "5.png",
                information: "Лучший Строитель на свете"
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