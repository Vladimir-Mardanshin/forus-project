var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var User = db.user;

//реализация профиля, чтобы видно было че каво у всех
exports.findById = (req, res) => {
  User.findByPk(req.params.id)
      .then(object => {
          globalFunctions.sendResult(res, object);
      })
      .catch(err => {
          globalFunctions.sendError(res, err);
      })
};

//вывод только исполнителей
exports.findExecutors = (req, res) => {
    User.findAll({
      where: {
        role: 'Исполнитель'
      }
    })
    .then(users => {
      globalFunctions.sendResult(res, users);
    })
    .catch(err => {
      globalFunctions.sendError(res, err);
    });
  };
  