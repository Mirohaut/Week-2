'use strict';

const express = require('express');
const app = express();
const port = 3000;
const catRouter = require('./routes/catRouter');
const userRouter = require('./routes/userRouter');
println ("moui");
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(
    ''
  );
});

app.use('/cat', catRouter);
app.use('/user', userRouter);

http.createServer((req, res) => {
  res.writeHead(301, { 'Location': 'https://localhost:8000' + req.url });
  res.end();
}).listen(3000);
