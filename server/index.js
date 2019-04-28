/**
 * Created by renjie.huang on 2019/4/26.
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var dbMiddleWare = require('./middleware/db.middleware');
var db = require('./DBInstance');
var bodyParser = require('body-parser')

var user = require('./route/user');
var stock = require('./route/stock');
var product = require('./route/product');
var order = require('./route/order');



const url = 'mongodb://127.0.0.1:27017';
// Database Name
const dbName = 'aegean';
// Connect using MongoClient
const mongoClient = new MongoClient(url);
mongoClient.connect(function(err, client) {
	if(err){
		console.log(err);
		return;
	}
	const dbAegean = client.db(dbName);
	db.tbUser = dbAegean.collection('user');
	db.tbStock = dbAegean.collection('stock');
	db.tbProduct = dbAegean.collection('product');
	db.tbDelivery = dbAegean.collection('delivery');
	db.tbOrder = dbAegean.collection('order');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(function(req,res,next){
	req.db = db;
	next();
})

app.post('/user/*' , user);
app.post('/stock/*' , stock);
app.post('/product/*', product);
app.post('/order/*' , order);

app.listen(3001 , function(){
	console.log('aegean node server start at port : 3001');
})

