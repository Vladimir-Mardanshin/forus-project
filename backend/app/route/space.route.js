module.exports = (app) => {

    const space = require('../controller/space.controller');
    var { authJwt } = require("../middleware");
    
    app.post("/api/addSpace", [authJwt.verifyToken], space.addSpace);



};