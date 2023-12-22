var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var User = db.user;
var Equipment = db.equipment;

exports.addEquipment = (req, res) => {
    Equipment.create({
        space_id: req.body.space_id,
        description: req.body.description,
        count: req.body.count
    })
    .then(equipment => {
        var result = {
            message: "Аппаратура успешно добавлена",
            equipment: equipment 
        };
        res.status(201).json(result);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Ошибка добавления аппаратуры" });
    });
};

