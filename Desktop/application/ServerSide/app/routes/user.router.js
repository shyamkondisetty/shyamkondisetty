const express=require('express')
const router=express.Router();
const userController=require('../../controllers/user.controller');
const chatController=require('../../controllers/chat.controller');
router.post("/register",userController.registerCtrl)
router.post("/login",userController.loginCtrl);
router.put("/resetpassword",userController.resetCtrl);
router.get("/forget",userController.forgetCtrl)
router.post("/verifyemail",userController.verifyCtrl)
router.post("/dashboard",chatController.saveMessageCtrl)
module.exports=router;
