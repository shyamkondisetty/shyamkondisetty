const mongoose = require('mongoose');
const mail=require('../../middleware/nodeMailer');

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

        user.updateOne({ useremail: data.payload.useremail }, { password:newpassword }, (err, result) => {
            if (err) {
                callback(err);
            }
            else {
    
                callback(null, result);
            }
        });
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
                    result[0].password = data.password;
                    const userdata = new user(data);
                    userdata.save((err, result) => {
                        if (err) {
                            console.log(err);
                            callback(err);
                        }
                        else {
                            console.log("passwordChanged successfully....");
                            return callback(null, result)
                        }
                    })
                }
            }
        })
    }
    forget(data, callback) {
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
                else{

                    var token = jwt.sign({ useremail: data.useremail }, "secretkey")
                    mail.sendEMailFunction(token,result)
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
}







module.exports = new user_model();