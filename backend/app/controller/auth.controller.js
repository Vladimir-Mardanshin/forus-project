var db = require("../config/db.config");
var config = require("../config/auth.config");
var User = db.user;
var globalFunctions = require('../config/global.functions.js');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// регистрация пользователя с предварительной проверкой существования логина
exports.registerExecutor = (req, res) => {
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        patronymic: req.body.patronymic,
        profession: req.body.profession,
        email: req.body.email,
        phone: req.body.phone,
        role: 'Исполнитель',
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(object_user => {
          var result = {
            message: "Пользователь зарегистрирован"
          };
          globalFunctions.sendResult(res, result);
        })
        .catch(err => {
          globalFunctions.sendError(res, err);
        });
    };


exports.registerAdmin = (req, res) => {
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        patronymic: req.body.patronymic,
        profession: req.body.profession,
        email: req.body.email,
        phone: req.body.phone,
        role: 'Администратор',
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(object_user => {
            var result = {
                message: "Администратор зарегистрирован"
            };
            globalFunctions.sendResult(res, result);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

exports.registerCustomer = (req, res) => {
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        patronymic: req.body.patronymic,
        profession: req.body.profession,
        email: req.body.email,
        phone: req.body.phone,
        role: 'Заказчик',
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(object_user => {
            var result = {
                message: "Заказчик зарегистрирован"
        };
            globalFunctions.sendResult(res, result);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};


exports.login = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                res.status(404).send({ message: "Неверно введенный e-mail и/или пароль" });
                return;
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                res.status(401).send({
                    accessToken: null,
                    message: "Неверно введенный e-mail и/или пароль"
                });
                return;
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: "1h" // 1 час — время действия токена
            });

            var object = {
                id: user.id,
                role: user.role,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                patronymic: user.patronymic,
                phone: user.phone,
                profession: req.body.profession,
                accessToken: token
            };
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

// обновление токена jwt (когда срок действия текущего истекает)
exports.refreshToken = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                globalFunctions.sendError(res, "Неверно введенный e-mail и/или пароль");
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: "1h" // 1 час — время действия токена
            });

            var object = {
                id: user.id,
                role: user.role,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                patronymic: user.patronymic,
                phone: user.phone,
                profession: req.body.profession,
                accessToken: token
            };
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};

// проверка, что пользователь авторизован
exports.userBoard = (req, res) => {
    globalFunctions.sendResult(res, "Пользователь авторизован");
};