<template>
    <div class="sidebar">
        <div class="cal-item" style="display: flex; justify-content: center; align-items: center;">
            <vue-cal class="vuecal--date-picker" xsmall hide-view-selector :time="false" :transitions="false"
                active-view="month" :disable-views="['week']" style="width: 200px; height: 230px; color: black;">
            </vue-cal>
        </div>
        <h3 style="margin-top: 10px;">Активные приглашения</h3>
        <div v-for="item in getItems" :key="item.id" class="carousel-item"
            style="margin-top: 10px; text-align: left; color: black;">
            <p style="margin-bottom: 10px; font-size: 17px;">{{ item.name }}</p>
            <p class="forp" style="display: inline-block;">{{ item.time }}</p>
            <p class="forp" style="display: inline-block;">{{ item.guarantor }}</p>
            <p class="forp" style="width: 115px; text-align: center; margin-top: 5px;">{{ item.jobTitle }}</p>
            <div style="margin-top: 15px;">
                <v-btn @click="openInfo(item.unformation)" style="font-size: 11px; margin-right: 10px;">Подробнее</v-btn>
                <v-btn @click="cancel" style="font-size: 11px;">Отклонить</v-btn>
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

    </div>
</template>
  
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { mapGetters } from "vuex";

export default {
    computed: mapGetters(["getName", "getGuarantor", "getJobTitle", "getTime", "getItems"]),
    components: { VueCal },
    name: 'RightSideСalendar',
    data() {
        return {
            inform: "",
            dialogInformation: false
        }
    },
    methods: {
        openInfo(info) {
            this.inform = info;
            this.dialogInformation = true;
        },
        cancel(){
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
.carousel-item {
    text-align: center;
    padding: 20px;
    background-color: #ececec;
    border-radius: 8px;
}

.cal-item {
    text-align: center;
    background-color: #ececec;
    border-radius: 10px;
}

.forp {
    margin-right: 7px;
    border-radius: 10px;
    background-color: #C0C0C0;
    padding: 9px;
}

.elem {
    /* Стили для элемента карусели */
    text-align: center;
    padding: 20px;
    background-color: black;
    border-radius: 2px;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
}

.content {
    flex: 1;
    padding: 20px;
}

.sidebar {
    margin-top: 6.7%;
    color: azure;
    width: 20%;
    position: fixed;
    right: 0;
    margin-right: 3%;
    top: 0;
}
</style>
  