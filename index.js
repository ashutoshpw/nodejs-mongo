var express = require('express')
var app = express()
var w3dInsert = require('./w3dInsert');

app.get('/', function (req, res) {
  res.send('<form action="" method="post"><input type="text" name="col1"><input type="text" name="col2"><input type="text" name="col3"><input type="submit">');
})

app.post('/', function (req, res) {
  col1 = res.params.col1;
  col2 = res.params.col2;
  col3 = res.params.col3;
  col4 = "custom value";
  new w3dInsert(col1, col2, col3, col4);
})
