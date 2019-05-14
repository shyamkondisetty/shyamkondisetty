const userService = require('../services/');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if(!req.body.username) {
        return res.status(400).send({
            message: "username can not be empty"
        });
    }
    else if(!req.body.useremail) {
        return res.status(400).send({
            message: "usermail can not be empty"
        });
    }
    else if(!req.body.mobilenumber) {
        return res.status(400).send({
            message: "mobilenumber can not be empty"
        });
    }
    else if(!req.body.password) {
        return res.status(400).send({
            message: "password can not be empty"
        });
    }

    // Create a Scheema
    const user = new RegisterModel({
        //firstname: req.body.firstname,
        //lastname: req.body.lastname,
        username:req.body.username,
        useremail:req.body.useremail,
        mobilenumber:req.body.mobilenumber,
        password:req.body.password
    });
    //console.log(req.params.useremail);
    RegisterModel.findOne({useremail :  user.useremail},(err,res)=>{

    })
        .then(user=>{
            if(user) {
                return res.status(404).send({
                    message: "user found with email " 
                }); 
            }
            else{
                user.save()
                .then(data=>{
                    res.send(data);
                })
                .catch(err=>{
                    res.status(500).send({
                        message: err.message || "Some error occurred while regisetring."
                    });
                })
            }
        })
        .catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "user not found with mail  " + req.params.useremail
                });                
            }
            return res.status(500).send({
                message: "Error finding the user with  " + req.params.useremail
            })
            console.log(err);
        })
}