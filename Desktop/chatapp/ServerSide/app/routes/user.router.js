module.exports = (app) => {
    const userController=require('../../controllers/user.controller');
    app.post("/register",userController.registerCtrl);
}