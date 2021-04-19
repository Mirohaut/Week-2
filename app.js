'use strict';

const express = require('express');
const app = express();
const port = 3000;
const catRouter = require('./routes/catRouter');
const https = require('https');
const fs = require('fs');
const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem');

// const db = require('./database/db')
// db.connect({
//   host: process.env.DB_METROPOLIA,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })
// app.use(express.static('public'));

const options = {
  key: sslkey,
  cert: sslcert
};

const app = express();

https.createServer(options, app).listen(8000);

app.get('/', (req, res) => {
res.send('Hello Secure World!');
});

app.get('/', (req, res) => {
  res.send('Hello Secuuure World!');
});

// app.use('/cat', catRouter);

const http = require('http');

http.createServer((req, res) => {
      res.writeHead(301, { 'Location': 'https://localhost:8000' + req.url });
      res.end();
}).listen(3000);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// })

