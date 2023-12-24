<template>
  <v-container fluid>

    <v-app-bar :elevation="0" class="transparent">

      <div style="margin-left: auto; margin-right: 15px;">

        <router-link to="/equipment" class="forb ">
          <button class="myButton">
            Аппаратура
          </button>
        </router-link>

        <router-link to="/people" class="forb">
          <button class="myButton">
            Люди
          </button>
        </router-link>

        <router-link to="/space" class="forb">
          <button class="myButton">
            Пространство
          </button>
        </router-link>

        <router-link to="/" class="forb">
          <button class="myButton">
            Профиль
          </button>
        </router-link>

      </div>

      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <button v-bind="props" class="btn" style="margin-right: 2.5%; color: white;"><i class="fa fa-user-circle fa-2x"
              aria-hidden="true"></i></button>
        </template>

        <v-list style="margin-top: 15px; text-align: center; border: 2px solid white;">

          <v-list-item>
            <v-list-item-title>{{ getUser }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Организация: {{ getOrganization }}</v-list-item-title>
          </v-list-item>

          <v-list-item @click="exit">
            <v-list-item-title>Выход</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters(["getEmail", "getUser", "getRoot", "getEntrance", "getOrganization"]),
  name: 'MyNavbar',
  methods: {
    ...mapMutations(["changeEntrance"]),
    exit() {
      this.changeEntrance(false);
      this.$router.push('/entrance');
    }
  }

}
</script>


<style scoped>
.forb {
  color: white;
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
}

.transparent {
  margin-top: 0.7%;
  background-color: transparent !important;
}

.myButton:hover {
  background-color: #C0C0C0 ; /* Изменяем цвет фона при наведении */
  color: black;
  padding: 15px;
}

.myButton {
  padding: 15px;
}
</style>
