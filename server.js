const path = require('path');

const express = require('express');
const app = express();

const Port = 3000;

app.use(express.static(path.resolve('./public')));
app.use(function(req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(Port, function () {
  console.log('Listening on port ' + Port);
});
