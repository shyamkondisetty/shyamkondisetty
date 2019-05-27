
//these are used for ignoring validating the tokens
const jwt = require('jsonwebtoken')
exports.authentication = (req, res, next) => {
   var token = req.body.token
    console.log(req.body)

    if (token != null) {
        jwt.verify(token,'secretkey',(err, payload) => {
            let responseResult = {}

            if (err) {
                responseResult.err = err;
                responseResult.status = false;
                res.status(500).send(responseResult)
            }
            else {
                req.payload = payload;
                console.log("authentication token successful", result);
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