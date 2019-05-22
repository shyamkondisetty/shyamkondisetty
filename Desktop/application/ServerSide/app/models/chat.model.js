
/********************************************************************************
 *  @Purpose        : To pass the data to database and to recieve errors errors
 *                     and results from database  
 *  @file           : user.services.js
 *  @overview       : it get or post data from database 
 *  @author         : SHYAM.k
 *  @version        : V 2.0
 *  @since          : 19-05-2019
 ********************************************************************************/


const mongoose =require('mongoose')
const chatSchema = new mongoose.Schema({
    reciever:String,
    sender:String,
    message:String

}, {
    timestamps: true
});
const chat = mongoose.model('chat', chatSchema);
class chat_model{
        saveMsg(data,callback){
            const chatdata=new chat(data);
            chatdata.save((err,result)=>{
                if(err){
                    console.log(err);
                    callback(err);
                }
                else{
                    console.log("message saved successfully......");
                    return callback(null,result)
                }
            })
        }
}
module.exports=new chat_model();