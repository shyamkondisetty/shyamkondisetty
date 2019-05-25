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
const server=app.listen(port, () => {
console.log('server is running on ',port)
});


var io = require('socket.io')(server);
var connections=[];
//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    socket.on('has connected',function(username){
        console.log(username);
        console.log('A user connected');
        connections.push(username);
        console.log(connections)
        io.emit('has connected',connections)
    })

    socket.on('messagesent',function(messagesent){
        console.log(messagesent);
        console.log('messgaesent');
        io.emit('messagesent',messagesent)
    })

    socket.on('loggedout', function (sender) {
        console.log('A user disconnected');
        let index=connections.indexOf(sender);
        connections.splice(index, 1);
        console.log(connections);
       io.emit('loggedout',connections)
        
     });
    //io.emit('has connected',connections)
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function (sender) {
       console.log('A user disconnected');  
    });

    
 });
module.exports=app;