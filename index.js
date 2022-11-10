const express = require('express');
const app = express();
const port = 3000;

app.post('/', (req, res) => {
  res.send(req.email);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if (process.env.NODE_ENV === 'development') {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;
