const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const Boardgame = require('./models/boardgame');
const bodyParser = require('body-parser');
const boardgameController = require('./controllers/boardgameController');
const parseurl = require('parseurl');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/mwmongoosedb');


app.get('/', boardgameController.list);
app.get('/details/:id', boardgameController.details);
app.post('/details/:id', boardgameController.addstyle);
app.get('/create', boardgameController.createPage);
app.post('/create', boardgameController.create);
app.get('/delete/:id', boardgameController.delete);
app.get('/edit/:id', boardgameController.editPage);
app.post('/edit/:id', boardgameController.edit);

app.listen(3000);
