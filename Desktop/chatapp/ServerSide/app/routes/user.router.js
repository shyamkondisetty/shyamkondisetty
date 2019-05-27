const express=require('express')
const router=express.Router();
const userController=require('../../controllers/user.controller');
const chatController=require('../../controllers/chat.controller');
const auth=require('../../middleware/authentication')
router.post("/register",userController.registerCtrl)
router.post("/login",userController.loginCtrl);
router.post("/reset",auth.authentication,userController.resetCtrl);
router.post("/forgetpassword",userController.forgetCtrl)
router.post("/dashboard",chatController.saveMessageCtrl)
router.post("/getMsg",chatController.chatCtrl)
router.post("/getAllUsers",userController.allUsersCtrl)

module.exports=router;
