<template>
  <div class="page" style="color: white;">
    <div style="height: 400px; margin-bottom: 30px;" class="container" v-for="equipment in getEquipment" :key="equipment.id">
      <div class="top-half">

        <div class="dbtn"> 
          <v-btn @click="openInfo(equipment.information)" style="margin: 1.5%; border-radius: 10px;">Информация</v-btn>
        </div>

        <div class="ttit">
          <h2>{{ equipment.title }}</h2>
        </div>
      </div>

      <div class="bottom-half">

        <div class="child1">
          <div class="parent">
            <div class="elem" :style="chengeTheme(time.employment)" v-for="(time, index) in equipment.times" :key="index">
              {{ time.hour }}
            </div>
          </div>
        </div>

        <div class="child2" style="color: black;">
          <div>
            <v-btn @click="dialog = true"
              style="width: 170px; margin-bottom: 19px; border-radius: 10px;">Забронировать</v-btn>
            <v-btn @click="openInfo(equipment.information)" style="width: 170px; border-radius: 10px;">Подробнее</v-btn>
          </div>
        </div>

      </div>
    </div>

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

    <v-dialog v-model="dialogPhoto" width="auto">
      <div class="infoDial">
        <h2 style="margin-bottom: 20px;">Фото</h2>
        <v-btn @click="dialogPhoto = false">
          ок
        </v-btn>
      </div>
    </v-dialog>

    <v-dialog v-model="dialog" width="auto">
      <div class="fdial">
        <h3>Забронировать</h3>
        <h4 style="margin-top: 10px; margin-bottom: 10px;">Название</h4>

        <v-text-field label="Введите название мероприятия" v-model="name" hide-details="auto"></v-text-field>

        <h4 style="text-align: left; margin-top: 10px; margin-bottom: 10px;">
          Выберите время мероприятия
        </h4>
        <v-btn :style="backcol[0]" @click="changeBaccol(0)" class="ftime">08:00 - 09:00</v-btn>
        <v-btn :style="backcol[1]" @click="changeBaccol(1)" class="ftime">09:00 - 10:00</v-btn>
        <v-btn :style="backcol[2]" @click="changeBaccol(2)" class="ftime">10:00 - 11:00</v-btn>
        <v-btn :style="backcol[3]" @click="changeBaccol(3)" class="ftime">11:00 - 12:00</v-btn>
        <v-btn :style="backcol[4]" @click="changeBaccol(4)" class="ftime">12:00 - 13:00</v-btn>
        <v-btn :style="backcol[5]" @click="changeBaccol(5)" class="ftime">13:00 - 14:00</v-btn>
        <v-btn :style="backcol[6]" @click="changeBaccol(6)" class="ftime">14:00 - 15:00</v-btn>
        <v-btn :style="backcol[7]" @click="changeBaccol(7)" class="ftime">15:00 - 16:00</v-btn>
        <v-btn :style="backcol[8]" @click="changeBaccol(8)" class="ftime">16:00 - 17:00</v-btn>

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
          <v-btn @click="sendInvitation"
            style="width: 200px; margin-right: 20px; border-radius: 10px;">Забронировать</v-btn>
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
  components: {
    RightSideСalendar
  },
  data() {
    return {
      dialog: false,
      faces: [],
      dialogInformation: false,
      dialogPhoto: false,
      inform: "",
      backcol: [
        "", "", "", "", "", "", "", "", ""
      ]
    }
  },
  computed: {
    ...mapGetters(["getPeoples", "getEquipment"]),
  },
  methods: {
    openInfo(info) {
      this.inform = info;
      this.dialogInformation = true;
    },
    chengeTheme(emp) {
      if (emp == 1) {
        return "background-color: #C0C0C0";
      }
      else
        return "";
    },
    changeBaccol(N) {
      if (this.backcol[N] == "") {
        this.backcol[N] = "background-color: #C0C0C0;";
      }
      else {
        this.backcol[N] = "";
      }
    },
    addEl(newEl) {
      if (this.faces.length < 2) {
        this.faces.push(newEl);
      }
    },
    check() {
      if (this.faces.length == 2) {
        alert("Ошибка! Может быть только 2 исполнителя.");
      }
    },
    deleteEl(delEl) {
      this.faces.splice(delEl, 1);
    },
    sendInvitation() {
      alert("Бронь закреплена!");
      this.dialog = false;
    },
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
.elem {
  display: flex;
  color: black;
  margin-right: 5px;
  margin: 6px;
  border-radius: 10px;
  height: 40px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 2px solid #C0C0C0;
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
  height: 300px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
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
   