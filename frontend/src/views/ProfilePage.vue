<template>
  <div class="page" style="color: white;">
    <h1 style="text-align: left;">Приглашения</h1>
    <div v-for="item in getItems" :key="item.id" style="margin-top: 15px;" class="container">
      <p style="color: #ececec; font-size: 3px;">_        ffff</p>
      <h2 class="el">Название:</h2>
      <p class="el">{{item.name}}</p>
      <h2 class="el">Ответственные:</h2>
      <p class="el">{{item.guarantor}}</p>
      <h2 class="el">Должность:</h2>
      <p class="el">{{item.jobTitle}}</p>
      <h2 class="el">Время:</h2>
      <p class="el">{{item.time}}</p>
      <h2 class="el">Информация:</h2>
      <p class="el">{{item.unformation}}</p>
      <v-btn @click="sogl" class="el">Принять</v-btn>
      <v-btn @click="cans" class="el">Отклонить</v-btn>
    </div>
  </div>
  <RightSideСalendar />
</template>

<script>
import RightSideСalendar from '../components/RightSideСalendar.vue';
import { mapGetters } from "vuex";

export default {
  components: {
    RightSideСalendar
  },
  computed: {
    ...mapGetters(["getItems"]),
  },
  methods: {
    sogl() {
      alert("Приглашение принято!");
    },
    cans() {
      alert("Приглашение отклонено!");
    }
  }
}
</script>

<style scoped>
.infoDial {
  text-align: center;
  background-color: #ececec;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
}
.el {
 margin: 5px;
 margin-left: 20px;
}

.parent {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.child1 {
  width: 130%;
  background-color: #ececec;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;

}

.child2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.ttit {
  display: flex;
  align-items: left;
  margin-top: 140px;
  margin-left: 2%;
  color: black;
}

.dbtn {
  display: flex;
  align-items: left;
}

.top-half {
  background-color: #C0C0C0;
  height: 65%;
}

.bottom-half {
  background-color: #ececec;
  height: 35%;
  display: flex;
}

.bottom-half>div {
  margin-right: 10px;
}

.container {
  height: 415px;
  width: 100%;
  border-radius: 10px;
  text-align: left;
  color: black;
  background-color: #ececec;
}

.page {
  margin-top: 4.5%;
  color: azure;
  margin-left: 3.4%;
  width: 70%;
}

.forbd {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.forp {
  border-radius: 10px;
  background-color: #C0C0C0;
  padding: 6px;
}

.faces-container {
  height: 50px;
  display: flex;
  align-items: center;
}

.ftime {
  width: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.fdial {
  background-color: #ececec;
  width: 520px;
  padding: 20px;
  border-radius: 10px;
}</style>
   