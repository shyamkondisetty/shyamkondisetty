const express=require('express')
const router=express.Router();
const userController=require('../../controllers/user.controller');
router.post("/register",userController.registerCtrl)
router.post("/login",userController.loginCtrl);
router.put("/resetpassword",userController.resetCtrl);
router.get("/forget",userController.forgetCtrl)
router.post("/verifyemail",userController.verifyCtrl)
module.exports=router;
