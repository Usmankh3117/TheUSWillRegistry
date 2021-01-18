const http = require('http');
const express = require('express');
const path = require('path');const app = express();

app.use(express.json());
app.use(express.static("express"));// default URL for website
app.use(express.static(path.join(__dirname, 'will-registray')));
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/will-registray/index.html'));
  });

  const server = http.createServer(app);

const port = 4000;
server.listen(port);console.debug('Server listening on port ' + port);