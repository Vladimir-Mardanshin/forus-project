module.exports = (app) => {

    const order = require('../controller/order.controller');
    var { authJwt } = require("../middleware");

    app.post("/api/createOrder", [authJwt.verifyToken], order.createOrder);

    app.post("/api/inviteAndCreateOrder", [authJwt.verifyToken], order.inviteAndCreateOrder);

    app.get("/api/getOrdersByUserId",  [authJwt.verifyToken], order.getOrdersByUserId);

    app.get("/api/rejectOrder",  [authJwt.verifyToken], order.rejectOrder);

};