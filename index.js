'use strict';

const express = require('express');
const app = express();
const port = 80;
const catRouter = require('./routes/catRouter');
const userRouter = require('./routes/userRouter');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(
    ''
  );
});

app.use('/cat', catRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
