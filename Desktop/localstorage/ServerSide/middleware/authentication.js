
//these are used for ignoring validating the tokens
const jwt = require('jsonwebtoken')
exports.authentication = (req, res, next) => {
    var token = req.headers['token']

    if (token != null) {
        jwt.verify(token,'secretkey',(error, payload) => {

            if (error) {
                res.status(108).send({
                    success: false,
                    message: 'Bad Token'
                })
            }
            else {
                req.payload = payload;
                console.log("authentication successful", result);
                next();
            }
        })
    }
    else {
        res.send({
            success: false,
            message: 'No token provided.'
        });
    }
}