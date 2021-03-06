var express = require('express');
const mongoose = require('mongoose');
var http = require('http');
var apiRouter = require('./routes/viprahub');
var apiRouterCategory = require('./routes/category');
var apiRouterUpload = require('./routes/upload');
var apiRouterUploadMongo = require('./routes/uploadMongo');
var path = require('path');
require('./resources/db');
const cors=require('cors');
const bodyParser =require('body-parser');
const registrationRoute = require('./routes/registration');
const loginRoute = require('./routes/login');

const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/home', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/login', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/search', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/registration', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/userdashboard', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/upload', express.static(path.join(__dirname, '../dist/viprahub')));
app.use('/showimage', express.static(path.join(__dirname, '../dist/viprahub')));

app.use('/api', apiRouter);
app.use('/category', apiRouterCategory);
app.use('/uploadToMongo', apiRouterUploadMongo);
app.use('/upload', apiRouterUpload);

app.use('/registration', registrationRoute);
app.use('/login', loginRoute);

var port = process.env.PORT || 4000;
app.set('port', port);
var server = http.createServer(app);


server.listen(port, () => {
  console.log('server running on port ' + port);
});
