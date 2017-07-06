const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const Boardgame = require('./models/boardgame');
const boardgameController = require('./controllers/boardgameController');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/mwmongoosedb');


app.get('/', boardgameController.list);


app.listen(3000);
