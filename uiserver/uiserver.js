require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 80;

app.use(express.static('public'));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, err => {
  if (err) return console.log(err);
  console.log(`UI server is working on port ${port}`);
});