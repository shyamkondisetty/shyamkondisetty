const userModel=require('../app/models/user.model');
exports.registerService=(data,callback)=>{

        userModel.register(data,(err,result)=>{
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                return callback(null,result);

            }

        })
}
exports.loginService=(data,callback)=>{
    userModel.login(data,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }
        else{
            return callback(null,result);

        }
    })
}

exports.resetService=(data,callback)=>{
    userModel.reset(data,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }
        else{
            return callback(null,result);
        }
    })
}
exports.forgetService=(data,callback)=>{
    userModel.forget(data,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }
        else{
            return callback(null,result);
        }
    })
}


exports.verifyService=(data,callback)=>{
    userModel.verify(data,(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }
        else{
            return callback(null,result);
        }
    })
}



try {

    exports.allUsersService= (data, callback) => {
        userModel.getAllMsg(data, (err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                console.log("in services");
                
                return callback(null, result);

            }

        })

    }
} catch (err) {
    console.log(err);
}