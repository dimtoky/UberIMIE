const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const router = require('./router').router;
const cors = require('cors');

const app = express();

mongoose.connect(
    "mongodb+srv://root:wamwnz11DmcpxtDq@clusterimie.euvgs.mongodb.net/imiebd?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
  );


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());



//configure routes
app.use('/', router);



app.listen(3001, () => {
    console.log('Listening on port 3001');
});
