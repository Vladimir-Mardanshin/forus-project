<template>
	<div class="page" style="color: white;">
		<div class="component" v-for="(coworking, index) in coworkings" :key="index">
			<div class="header">
				<v-btn size="small" class="button">
					Фото
				</v-btn>
				<v-btn size="small" class="button">
					Информация
				</v-btn>
			</div>
			<div class="footer">
				<div class="header">
					<h4>{{coworking.title}}</h4>
				</div>
				<div class="main">
					<div class="times">
						<div class="times_row">
							<v-btn size="small" class="time">
								08:00 - 09:00
							</v-btn>
							<v-btn size="small" class="time">
								09:00 - 10:00
							</v-btn>
							<v-btn size="small" class="time">
								10:00 - 11:00
							</v-btn>
							<v-btn size="small" class="time">
								11:00 - 12:00
							</v-btn>
							<v-btn size="small" class="time">
								12:00 - 13:00
							</v-btn>
							<v-btn size="small" class="time">
								13:00 - 14:00
							</v-btn>
						</div>
						<div class="times_row">
							<v-btn size="small" class="time">
								14:00 - 15:00
							</v-btn>
							<v-btn size="small" class="time">
								15:00 - 16:00
							</v-btn>
							<v-btn size="small" class="time">
								17:00 - 18:00
							</v-btn>
							<v-btn size="small" class="time">
								18:00 - 19:00
							</v-btn>
							<v-btn size="small" class="time">
								19:00 - 20:00
							</v-btn>
							<v-btn size="small" class="time">
								20:00 - 21:00
							</v-btn>
						</div>
					</div>
					<div class="actions">
						<v-btn size="small" class="button" @click="dialog = true;">
							Забронировать
						</v-btn>
						<v-btn size="small" class="button">
							Подробнее
						</v-btn>
					</div>
				</div>
			</div>
		</div>
		
		<v-dialog v-model="dialog" width="auto">
			<div class="fdial">
				<h3>Приглашение</h3>
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
	components: {
		RightSideСalendar
	},
	data(){
		return {
			coworkings: [
					{
						title : "Коворкинг ИРНИТУ", 
					},
					{
						title : "Коворкинг ИРНИТУ", 
					}
			],
			dialog: false,
			faces: [],
			backcol: [
				"", "", "", "", "", "", "", ""
			]
		}
	},
	computed: {
		...mapGetters(["getPeoples"]),
	},
	methods: {
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
			alert("Приглашение отправлено!");
			this.dialog = false;
		},
	}
}
</script>

<style name="page" scoped>
	.page {
		margin-top: 4.5%;
		color: azure;
		margin-left: 3.4%;
		width: 70%;
	}
	.component{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-basis: 10%;
		background-color: #F0F0F0;
		color: #000000;
		border-radius: 5px;
		margin: 0 3.5%;
		margin-bottom: 4%;
	}
	.component > .header{
		display: flex;
		flex-basis: 15%;
		margin: 0.5%;
		margin-bottom: 7%;
	}
	.component > .footer{
		display: flex;
		flex-direction: column;
		flex-basis: 45%;
		border-radius: 5px;
		margin: 0.8%;
	}
	.component > .header > .button{
		font-size: 10px;
		font-weight: bold;
		margin: 0.5%;
	}
	.component > .footer > .header{
		display: flex;
		flex-basis: 20%;
		margin: 1.3% 0;
		user-select: none;
	}
	.component > .footer > .main{
		display: flex;
		flex-basis: 80%;
		background-color: #E6EBF2;
	}
	.component > .footer > .main > .times{
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		flex-basis: 75%;
	}
	.component > .footer > .main > .actions{
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-basis: 25%;
	}
	.component > .footer > .main > .times > .times_row{
		display: flex;
		margin: 5px 0;
	}
	.component > .footer > .main > .actions > .button{
		font-size: 10px;
		font-weight: bold;
		margin: 5px;
	}
	.component > .footer > .main > .times > .times_row > .time{
		display: flex;
		font-size: 12px;
		margin-right: 10px;
		padding: 4px 15px;
		border: 2px solid #CFD8E5;
		border-radius: 5px;
		user-select: none;
	}
</style>

<style name="dialog" scoped>
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

	.fdial {
		background-color: #ececec;
		width: 520px;
		padding: 20px;
		border-radius: 10px;
	}
</style>
   