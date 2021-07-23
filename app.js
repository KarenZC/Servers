//#Dependencias
var config = require('./config')
var express = require('express');
var morgan = require('morgan');
var ejs = require('ejs');


var app = express();
app.use(morgan('dev'));

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//console.log(enfasis.length)
app.listen(config.app.port, () => {
    console.log(`Server running on port  ${config.app.port}`)
})