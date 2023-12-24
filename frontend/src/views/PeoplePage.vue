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

            <v-btn @click="openInfo(people.information)" style="background-color: #ececec; font-size: 11px;">
              Подробнее
            </v-btn>

          </div>
        </v-card>

      </v-col>
    </v-row>

    <v-dialog v-model="dialogInformation" width="auto">
      <div class="infoDial">
        <h2 style="margin-bottom: 20px;">Информация</h2>
        <p>
          {{ inform }}
        </p>
        <br>
        <v-btn @click="dialogInformation = false">
          ок
        </v-btn>
      </div>
    </v-dialog>

    <v-dialog v-model="dialog" width="auto">
      <div class="fdial">

        <h3>Приглашение</h3>
        <h4 style="margin-top: 10px; margin-bottom: 10px;">Название</h4>

        <v-text-field label="Введите название мероприятия" v-model="name" hide-details="auto"></v-text-field>

        <h4 style="text-align: left; margin-top: 10px; margin-bottom: 10px;">
          Выберите время мероприятия
        </h4>
        <v-btn :style="backcol[1]" @click="changeBaccol(1)" class="ftime">08:00 - 09:00</v-btn>
        <v-btn :style="backcol[2]" @click="changeBaccol(2)" class="ftime">09:00 - 10:00</v-btn>
        <v-btn :style="backcol[3]" @click="changeBaccol(3)" class="ftime">10:00 - 11:00</v-btn>
        <v-btn :style="backcol[4]" @click="changeBaccol(4)" class="ftime">11:00 - 12:00</v-btn>
        <v-btn :style="backcol[5]" @click="changeBaccol(5)" class="ftime">12:00 - 13:00</v-btn>
        <v-btn :style="backcol[6]" @click="changeBaccol(6)" class="ftime">13:00 - 14:00</v-btn>
        <v-btn :style="backcol[7]" @click="changeBaccol(7)" class="ftime">14:00 - 15:00</v-btn>
        <v-btn :style="backcol[8]" @click="changeBaccol(8)" class="ftime">15:00 - 16:00</v-btn>
        <v-btn :style="backcol[0]" @click="changeBaccol(0)" class="ftime">16:00 - 17:00</v-btn>

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
      dialogInformation: false,
      id: 0,
      inform: "",
      faces: [],
      backcol: ["", "", "", "", "",
        "", "", "", ""]
    }
  },

  methods: {
    openInfo(info) {
      this.inform = info;
      this.dialogInformation = true;
    },
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

    changeBaccol(id) {
      if (this.backcol[id] == "") {
        this.backcol[id] = "background-color: #C0C0C0;";
      }
      else {
        this.backcol[id] = "";
      }
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
   