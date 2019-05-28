
//these are used for ignoring validating the tokens
const jwt = require('jsonwebtoken')
exports.authentication = (req, res, next) => {
   
    console.log(req.body)
    var token = req.body.token;
    console.log(token)
    if (token != null) {
        jwt.verify(token,'secretkey',(err, payload) => {
            let responseResult = {}

            if (err) {
                responseResult.err = err;
                responseResult.status = false;
                res.status(500).send(responseResult)
            }
            else {
                req.body.payload = payload;
                console.log(req.body)
                console.log("authentication token successful",payload);
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