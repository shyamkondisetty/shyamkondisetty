/********************************************************************************
 *  @Purpose        : To pass the data to model and to recieve errors errors
 *                     and results from database  
 *  @file           : chat.services.js
 *  @overview       : it responds to the server chat sevices
 *  @author         : SHYAM.k
 *  @version        : V 2.0
 *  @since          : 19-05-2019
 ********************************************************************************/


const chatModel = require('../app/models/chat.model')
try {

    exports.saveMessageService = (data, callback) => {
        chatModel.saveMsg(data, (err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                return callback(null, result);

            }

        })

    }
} catch (err) {
    console.log(err);
}