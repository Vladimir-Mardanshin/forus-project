module.exports = (app) => {

    const user = require('../controller/user.controller');
    var { authJwt } = require("../middleware");

    app.get("/api/findUserById", [authJwt.verifyToken], user.findById);

    app.post("/api/findExecutors", user.findExecutors);
};