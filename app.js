const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

/*
const logger = function(req, res, next){
	console.log('logging...');
	next();
}

app.use(logger);
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

/*
var person = {
	name: 'Jeff',
	age: 30
}
*/

app.get('/', function(req, res, next){
	res.render('index.html');
	res.render('main.html')
});

app.listen(3000, function(){
	console.log('Server started on port 3000...');
})