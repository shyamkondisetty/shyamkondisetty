const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //firstname: String,
    //lastname: String,
    username:String,
    useremail:String,
    mobilenumber:Number,
    password:String
}, {
    timestamps: true
});

const user = mongoose.model('user', userSchema);
function user_model(){

}
user_model.prototype.register=((data,callback)=>{
    user.findOne({useremail :  user.useremail},(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }
        else{
            if(result!=null){
                console.log("email is already present");
            }
            else{
                const userdata=new user(data);
                userdata.save((err,result)=>{
                    if(err){
                        console.log(err);
                        callback(err);
                    }
                    else{
                        console.log("register successfully....");
                        return callback(null,result)
                    }
                })
                
            }
        }
    })
})





module.exports=new user_model();