module.exports = (app) => {

    const user_img = require('../controller/user_img.controller');
    var { authJwt } = require("../middleware");

    app.post('/api/addUserImg',  [authJwt.verifyToken],user_img.addUserImg);    
    app.get('/api/getUserImgById/:userId',  user_img.getUserImgById);
};