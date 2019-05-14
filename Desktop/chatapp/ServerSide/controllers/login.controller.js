const Login = require('../app/models/login.model');
// Find a single note with a noteId
exports.findOne = (req, res) => {
    Login.findById(req.params.username)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.username
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.username
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.username
        });
    });
};