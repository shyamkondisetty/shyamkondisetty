const mongoose = require('mongoose');
const mail=require('../../middleware/nodeMailer');
const jwt=require('jsonwebtoken');

const userSchema = new mongoose.Schema({

        username: String,
        useremail: String,
        mobilenumber: String,
        password: String
        }, {
        timestamps: true
});

const user = mongoose.model('user', userSchema);

class user_model {
    register(data, callback) {
        user.findOne({ useremail: data.useremail }, (err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                console.log(result);
                if (result != null) {
                    console.log("email is already present");
                    callback("exists", result);
                }
                else {
                    const userdata = new user(data);
                    userdata.save((err, result) => {
                        if (err) {
                            console.log(err);
                            callback(err);
                        }
                        else {
                            console.log("register successfully....");
                            return callback(null, result)
                        }
                    })

                }
            }
        })
    }
    login(data, callback) {
        user.find({ useremail: data.useremail }, (err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                if (result == null) {
                    console.log("email is not registered");
                    return callback("Not Exists");
                }
                else if (result[0].password == data.password) {
                    console.log("authorization success");
                    return callback(null, result)

                }
            }
        })
    }

    reset(data, callback) {

        user.updateOne({ useremail: data.payload.useremail }, { password:data.password }, (err, result) => {
            if (err) {
                callback(err);
            }
            else if(result==null){
                callback("email not exists");
            }
            else if(result.length==0){
                callback("email not exists");
            }
            else {
                console.log("changed successfully");
                callback(null, result);
            }
        });
    }



    forget(data, callback) {
        user.find({ useremail: data.useremail }, (err, result) => {
            console.log()
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                if (result.length==0) {
                    console.log("email is not registered");
                    return callback("Not Exists");
                }
                else{
                    console.log(result[0])

                    var token = jwt.sign({ useremail: data.useremail }, "secretkey")
                    mail.sendEMailFunction(token,result[0])
                    return callback(null, result)

                }
            }

            
        })
    }


    verify(data, callback) {


        
        user.find({ useremail: data.useremail }, (err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                if (result == null) {
                    console.log("email is not registered");
                    return callback("Not Exists")
                }
                else {

                }
            }
        })
    }


    getAllMsg(data,callback){
        user.find({},(err,result)=>{
            if(err){
                console.log(err);
                callback(err);
            }
            else{
                console.log("all users get successfully......");
                return callback(null,result)
            }
        })
    }
}







module.exports = new user_model();