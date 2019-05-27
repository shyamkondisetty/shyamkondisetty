/*************************************************************************************
 *  @Purpose        : To pass the data to chat services and to send response to client
 *  @file           : chat.controller.js
 *  @overview       : it responds to the server chat controllers
 *  @author         : SHYAM.k
 *  @version        : V 2.0
 *  @since          : 16-05-2019
 *************************************************************************************/

const chatservice = require('../services/chat.services');
try {
    exports.saveMessageCtrl = (req, res) => {
        let responseResult = {}
        chatservice.saveMessageService(req.body, (err, result) => {
            if (err) {
                responseResult.err = err;
                responseResult.status = false;
                res.status(500).send(responseResult)
            }
            else {
                responseResult.data = result;
                responseResult.status = true;
                res.status(200).send(responseResult);
            }
        })


    }
}catch(err){
    console.log(err);
}


try {
    exports.chatCtrl = (req, res) => {
        let responseResult = {}
        chatservice.chatService(req.body, (err, result) => {
            if (err) {
                responseResult.err = err;
                responseResult.status = false;
                res.status(500).send(responseResult)
            }
            else {
                responseResult.data = result;
                responseResult.status = true;
                console.log("hi how ",responseResult);
                res.status(200).send(responseResult);
            }
        })


    }
}catch(err){
    console.log(err);
}



