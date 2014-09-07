;(function initialize() {
  var appConfig = require('./server/appConfig.js')
    , express = require('express')
    , app = express()
    , server = require('http').createServer( app )

    app.use('/', express.static(__dirname + '/public'));

    app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    });

    appConfig.initialize( server );
})()