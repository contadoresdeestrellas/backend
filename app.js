
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const fs = require('fs');
var getenv = require('getenv');

const video = require('./routes/video.route');
const meteor = require('./routes/meteor.route');
const challenge = require('./routes/challenge.route.js');
// initialize express
const app = express();
const mongoose = require('mongoose');
var db_url ="mongodb://ds257551.mlab.com:57551/meteorites" 


const mongoDB=process.env.MONGODB_URI || db_url;

mongoose.connect(mongoDB,{
  user:getenv('MONGO_USER'),
  pass:getenv('MONGO_PASS'),
  useNewUrlParser: true
}, function(err,db){});
mongoose.Promise= (global.Promise);

const db = mongoose.connection;

db.on('error', console.error.bind(console,'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/videos',video);
app.use('/meteors',meteor);
app.use('/challenge',challenge);


// Crear servidor http
http.createServer(app).listen(80);

try{
var ssl_options = {
  key: fs.readFileSync('cert/_new.cert.key'),
  cert: fs.readFileSync('cert/new.cert.cert')
};

https.createServer(ssl_options,app).listen(443);
}catch(e){
console.log("No se ha podido iniciar el servidor https por la siguiente razon: " + e.message);
}
//var port =80;

// app.listen(port,'0.0.0.0',()=>{
//   console.log("Server up and running in port "+port);
// });


