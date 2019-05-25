/**
 * define the nodemailers by const varaible
 */
const nodemailer = require('nodemailer');
//require('dotenv').config()
/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
exports.sendEMailFunction = (token, payload) => {
    /**
     * creating transport obj send mail
     */
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shyamkondisetty@gmail.com',
            pass: 'shyam5171714'
        },
    });
    
    const mailOptions = {
        from: 'shyamkondisetty@gmail.com',        
        to: payload.useremail,
        subject: 'node.js send mail',       

        text: 'http://localhost:3000/#!/resetPassword/'+token
    };
    /**
     * validating the errors throughcall back function passing err and info parameters along mail option parameter 
     */
    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log("error on sent mail" + err)
        else
            console.log("result sent on mail" + info)
    });
}