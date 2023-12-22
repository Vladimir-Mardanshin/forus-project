<template>
  <div class="page" style="color: white;">

    <v-row class="list__cafes-content" style="margin-bottom: 30px;">
      <v-col v-for="people in getPeoples" :key="people.id" md="4">
        <v-card>

          <v-img height="250" :src="people.imgUrl" style="background-color: #ececec;"></v-img>

          <v-card-title>
            {{ people.name }}
          </v-card-title>

          <v-card-text class="parent-container">
            <div style="text-align: center; font-size: 17px; width: 150px;" class="forJobTitle">
              {{ people.jobTitle }}
            </div>
          </v-card-text>

          <div style="margin-bottom: 15px;">

            <v-btn @click="invitation(people.id)" style="background-color: #ececec; font-size: 11px; margin-right: 10px;">
              Пригласить
            </v-btn>

            <v-btn style="background-color: #ececec; font-size: 11px;">
              Подробнее
            </v-btn>

          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="auto">
      <div class="fdial">

        <h3>Приглашение</h3>
        <h4 style="margin-top: 10px; margin-bottom: 10px;">Название</h4>

        <v-text-field label="Введите название мероприятия" v-model="name" hide-details="auto"></v-text-field>

        <h4 style="text-align: left; margin-top: 10px; margin-bottom: 10px;">
          Выберите время мероприятия
        </h4>
        <v-btn :style="backcol1" @click="changeBaccol1" class="ftime">08:00 - 09:00</v-btn>
        <v-btn :style="backcol2" @click="changeBaccol2" class="ftime">09:00 - 10:00</v-btn>
        <v-btn :style="backcol3" @click="changeBaccol3" class="ftime">10:00 - 11:00</v-btn>
        <v-btn :style="backcol4" @click="changeBaccol4" class="ftime">11:00 - 12:00</v-btn>
        <v-btn :style="backcol5" @click="changeBaccol5" class="ftime">12:00 - 13:00</v-btn>
        <v-btn :style="backcol6" @click="changeBaccol6" class="ftime">13:00 - 14:00</v-btn>
        <v-btn :style="backcol7" @click="changeBaccol7" class="ftime">14:00 - 15:00</v-btn>
        <v-btn :style="backcol8" @click="changeBaccol8" class="ftime">15:00 - 16:00</v-btn>
        <v-btn :style="backcol9" @click="changeBaccol9" class="ftime">16:00 - 17:00</v-btn>

        <h4>Ответственные лица</h4>
        <div class="faces-container">

          <div v-for="(face, index) in faces" :key="index">
            <p class="forp" @click="deleteEl(index)" style="cursor: pointer; margin-right: 10px;">
              {{ face }}
            </p>
          </div>

          <v-menu location="bottom">

            <template v-slot:activator="{ props }">
              <p style="cursor: pointer;" v-bind="props" @click="check">+</p>
            </template>

            <v-list style="margin-top: 15px; text-align: center; border: 2px solid white;">
              <v-list-item @click="addEl(people.name)" v-for="people in getPeoples" :key="people.id">
                <v-list-item-title>{{ people.name }}</v-list-item-title>
              </v-list-item>
            </v-list>

          </v-menu>
        </div>

        <hr style="margin-bottom: 10px;">

        <h4 style="margin-bottom: 10px;">Дополнительная информация</h4>
        <v-text-field label="Добавить комментарий" v-model="name" hide-details="auto"></v-text-field>

        <div class="forbd">
          <v-btn @click="sendInvitation" style="width: 200px; margin-right: 20px; border-radius: 10px;">Пригласить</v-btn>
          <v-btn @click="dialog = false" style="width: 200px; border-radius: 10px;">Отмена</v-btn>
        </div>

      </div>
    </v-dialog>
  </div>

  <RightSideСalendar />
</template>
   
<script>
import RightSideСalendar from '../components/RightSideСalendar.vue';
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getPeoples"]),
  components: {
    RightSideСalendar
  },
  data() {
    return {
      dialog: false,
      id: 0,
      faces: [],
      backcol1: "", backcol2: "", backcol3: "", backcol4: "", backcol5: "",
      backcol6: "", backcol7: "", backcol8: "", backcol9: "",
    }
  },

  methods: {
    sendInvitation() {
      alert("Приглашение отправлено!");
      this.dialog = false;
    },
    addEl(newEl) {
      if (this.faces.length < 2) {
        this.faces.push(newEl);
      }
    },

    deleteEl(delEl) {
      this.faces.splice(delEl, 1);
    },

    check() {
      if (this.faces.length == 2) {
        alert("Ошибка! Может быть только 2 исполнителя.");
      }
    },

    invitation(new_id) {
      this.id = new_id;
      this.dialog = true;
      console.log(this.id);
    },

    changeBaccol1() {
      if (this.backcol1 == "") { 
        this.backcol1 = "background-color: #C0C0C0;"; 
      }
      else { 
        this.backcol1 = ""; 
      }
    },
    changeBaccol2() {
      if (this.backcol2 == "") {
        this.backcol2 = "background-color: #C0C0C0;";
      }
      else {
        this.backcol2 = "";
      }
    },
    changeBaccol3() {
      if (this.backcol3 == "") {
        this.backcol3 = "background-color: #C0C0C0;";
      }
      else {
        this.backcol3 = "";
      }
    },
    changeBaccol4() {
      if (this.backcol4 == "") {
        this.backcol4 = "background-color: #C0C0C0;";
      }
      else {
        this.backcol4 = "";
      }
    },
    changeBaccol5() {
      if (this.backcol5 == "") {
        this.backcol5 = "background-color: #C0C0C0;";
      }
      else {
        this.backcol5 = "";
      }
    },
    changeBaccol6() {
      if (this.backcol6 == "") {
        this.backcol6 = "background-color: #C0C0C0;";
      }
      else {
        this.backcol6 = "";
      }
    },
    changeBaccol7() {
      if (this.backcol7 == "") {
        this.backcol7 = "background-color: #C0C0C0;";
      }
      else {
        this.backcol7 = "";
      }
    },
    changeBaccol8() {
      if (this.backcol8 == "") {
        this.backcol8 = "background-color: #C0C0C0;";
      }
      else {
        this.backcol8 = "";
      }
    },
    changeBaccol9() {
      if (this.backcol9 == "") {
        this.backcol9 = "background-color: #C0C0C0;";
      }
      else {
        this.backcol9 = "";
      }
    },
  }
}
</script>
   
<style scoped>
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
  /* Устанавливаем flex контейнер */
}

#myButton:active {
  /* Стили при клике на кнопку */
  background-color: #45a049;
}

.ftime {
  width: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fdial {
  background-color: #ececec;
  width: 520px;
  padding: 20px;
  border-radius: 10px;
}

.forJobTitle {
  border-radius: 10px;
  background-color: #ececec;
  padding: 9px;
}

.page {
  margin-top: 4.5%;
  color: azure;
  margin-left: 3.4%;
  width: 70%;
}
</style>
   