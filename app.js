'use strict';

const express = require('express');
const app = express();
const port = 3000;
const catRouter = require('./routes/catRouter');
const db = require('./database/db')
db.connect({
  host: process.env.DB_METROPOLIA,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/cat', catRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

