const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const router = require('./router').router;
const cors = require('cors');
const http = require('http');
const https = require('https');
const fs = require('fs');
const app = express();





mongoose.connect(
  "mongodb+srv://root:wamwnz11DmcpxtDq@clusterimie.euvgs.mongodb.net/imiebd?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);


// serve the API with signed certificate on 443 (SSL/HTTPS) port

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());



//configure routes
app.use('/', router);

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync(' /etc/letsencrypt/live/uberimiegrp8.ddns.net/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/uberimiegrp8.ddns.net/fullchain.pem'),
}, app);

httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});

module.exports = app
