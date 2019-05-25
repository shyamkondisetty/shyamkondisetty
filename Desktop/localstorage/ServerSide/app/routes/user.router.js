const express=require('express')
const router=express.Router();
const userController=require('../../controllers/user.controller');
const chatController=require('../../controllers/chat.controller');
const auth=require('../../middleware/authentication')
router.post("/register",userController.registerCtrl)
router.post("/login",userController.loginCtrl);
router.post("/resetpassword/:token",auth.authentication,userController.resetCtrl);
router.post("/forget",userController.forgetCtrl)
router.post("/verifyemail",userController.verifyCtrl)
router.post("/dashboard",chatController.saveMessageCtrl)
router.post("/getMsg",chatController.chatCtrl)

module.exports=router;
