const userservice=require('../services/user.services');


exports.register=(data,callback)=>{
    userservice.register(data,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }
        else{
            return callback(null,result);
        }
    })
}