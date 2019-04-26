/**
 * Created by renjie.huang on 2019/4/26.
 */

var express = require('express');
var app = express();
var user = require('./route/user');
var MongoClient = require('mongodb').MongoClient;
var dbMiddleWare = require('./middleware/db.middleware');
var DBInstance = require('./DBInstance');
var aegeanDB;



const url = 'mongodb://127.0.0.1:27017';
// Database Name
const dbName = 'aegean';
// Connect using MongoClient
const mongoClient = new MongoClient(url);
mongoClient.connect(function(err, client) {
	const db = client.db(dbName);
	aegeanDB = db;
	DBInstance.init(aegeanDB);

	console.log(DBInstance.tbUser().insertOne({user:'huang.renjie'}));
});


app.post('/user' , user);

app.listen(3001 , function(){
	console.log('aegean node server start at port : 3001');
})

