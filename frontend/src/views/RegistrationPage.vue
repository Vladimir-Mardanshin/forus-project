<template>
    <div class="centered-container">

        <h1 style="color: white; margin-bottom: 15px;">Регистрация</h1>

        <div style="color: white; width: 300px;">
            <v-text-field label="Имя" v-model="name" hide-details="auto"></v-text-field>
            <v-text-field label="Фамилия" v-model="firstname" hide-details="auto"></v-text-field>
            <v-text-field label="Почта" v-model="email" hide-details="auto"></v-text-field>
            <v-text-field label="Организация" v-model="organization" hide-details="auto"></v-text-field>
            <v-text-field label="Пароль" v-model="password"></v-text-field>
        </div>

        <v-btn @click="enter" class="transparent-button">
            Зарегистрироваться
        </v-btn>

    </div>
</template>
    
<script>
import { mapMutations } from "vuex";

export default {

    data() {
        return {
            name: '',
            firstname: '',
            email: '',
            organization: '',
            password: ''
        };
    },

    methods: {
        ...mapMutations(["changeEntrance", "changeEmail"]),
        enter() {
            if ((this.name == '') || (this.firstname == '') || (this.email == '')
                || (this.organization == '') || (this.password == '')) {
                alert('Поля не могут быть пустыми!');
            } else {
                this.changeEntrance(true);
                this.changeEmail(this.email);
                this.$router.push('/');
            }
        },
    }
};
</script>
    
<style scoped>
.transparent-button {
    width: 220px;
    color: white;
    border: 1px solid white;
    background-color: transparent !important;
}

.centered-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>
    