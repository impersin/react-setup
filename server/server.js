var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);
var option = {noInfo: true, publicPath: config.output.publicPath};
app.use(webpackDevMiddleware(compiler, option ));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/../client'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
  // res.send('hello from express');
});

const port = process.env.PORT || 3100;

app.listen(port, function(error) {
  if (error) { throw error; }
  console.log('Express server listening on port', port);
}); 