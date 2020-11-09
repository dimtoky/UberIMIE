const express = require('express');
var bodyParser = require('body-parser');
var router = require('./apiRouter').router;
var cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());



//configure routes
server.use('/', router);



app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});