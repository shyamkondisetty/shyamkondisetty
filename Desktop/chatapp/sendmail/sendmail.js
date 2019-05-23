const nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken')
module.exports=function sendemail(url,data){
    var token = jwt.sign({ useremail: data.useremail }, "secretkeychatappppppp")
    console.log("token =====>>", token);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shyamkondisetty@gmail.com',
            pass: 'shyam5171714'
        }
    });

    var mailOptions = {
        from: 'shyamkondisetty@gmail.com',
        to: 'shyamkondisetty@gmail.com',
        subject: 'Sending Email using Node.js',
        text:`url=${url}&token=${token}`
     
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
         console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            callback(null, info);
        }
});


}

url :http://localhost3000/verifyemail






