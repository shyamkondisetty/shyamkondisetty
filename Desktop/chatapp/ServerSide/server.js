const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router=require('../ServerSide/app/routes/user.router')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
app.use('/',router)
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

const server = app.listen(3000, () => {
console.log('server is running on port', server.address().port);
});
//app.use(express.static(__dirname));


module.exports=app;