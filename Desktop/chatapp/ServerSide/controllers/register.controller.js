const Note = require('../app/models/register.model');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const user = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username:req.body.username,
        useremail:req.body.useremail,
        mobilenumber:req.body.mobilenumber,
        password:req.body.password
    });

    // Save Note in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};