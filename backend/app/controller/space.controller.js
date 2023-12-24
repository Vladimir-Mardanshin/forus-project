var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var User = db.user;
var Space = db.space;

//Добавление помещения
exports.addSpace = (req, res) => {
    Space.create({
        user_id: req.body.user_id,
        address: req.body.address,
        description: req.body.description
    })
    .then(space => {
        var result = {
            message: "Помещение успешно добавлено",
            space: space
        };
        res.status(201).json(result);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Ошибка добавления изображения" });
    });
};