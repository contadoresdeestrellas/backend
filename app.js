const express = require('express');
const bodyParser = require('body-parser');

const video = require('./routes/video.route');
const meteor = require('./routes/meteor.route');
const challenge = require('./routes/reto.route.js');
// initialize express
const app = express();

const mongoose = require('mongoose');
var db_url ="mongodb://ds257551.mlab.com:57551/meteorites" 


const mongoDB=process.env.MONGODB_URI || db_url;

mongoose.connect(mongoDB,{
	user:"",
	pass:"",
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
var port =1723;
app.listen(port,'0.0.0.0',()=>{
  console.log("Server up and running in port "+port);
});


