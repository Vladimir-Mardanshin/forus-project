var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Указание, что каталог files используется для хранения статических файлов
app.use(express.static("files"));

var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200', // указываем, откуда будут приходить запросы
    credentials: true, // разрешаем обрабатывать запросы
    optionSuccessStatus: 200 // при успешной обработке запроса будет возвращён статус 200
};
app.use(cors(corsOptions));

var db = require('./app/config/db.config.js'); // подключение настроек базы данных

db.sequelize.sync({force: false}); //не забыть переключить

app.listen(3000);

var user = require('./app/route/user.route.js');
user(app);

var user_img = require('./app/route/user_img.route.js');
user_img(app);

var equipment = require('./app/route/equipment.route.js');
equipment(app);

var order = require('./app/route/order.route.js');
order(app);

var space = require('./app/route/space.route.js');
space(app);

var auth = require('./app/route/auth.route.js');
auth(app);