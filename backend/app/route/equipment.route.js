module.exports = (app) => {

    const equipment = require('../controller/equipment.controller');
    var { authJwt } = require("../middleware");


    app.post('/api/addEquipment', [authJwt.verifyToken],equipment.addEquipment);


};