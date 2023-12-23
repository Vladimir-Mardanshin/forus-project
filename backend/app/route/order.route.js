module.exports = (app) => {

    const order = require('../controller/order.controller');
    var { authJwt } = require("../middleware");

    app.post("/api/createOrder", [authJwt.verifyToken], order.createOrder);

    app.post("/api/inviteAndCreateOrder", [authJwt.verifyToken], order.inviteAndCreateOrder);

    app.get("/api/getOrdersByUserId/:user_id",  [authJwt.verifyToken], order.getOrdersByUserId);

    app.get("/api/rejectOrder/:orderId",  [authJwt.verifyToken], order.rejectOrder);

    app.get("/api/getStartEndDate",  [authJwt.verifyToken], order.getStartEndDate);
    
};