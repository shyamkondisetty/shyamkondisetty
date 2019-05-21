const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router=require('../ServerSide/app/routes/user.router')
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/',router)
app.use(express.static('../frontend'))
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.json({"message": "Welcome to chat application"});
});


var port =3000
console.log("port")
app.listen(port, () => {
console.log('server is running on ',port)
});
module.exports=app;