var dotenv = require('dotenv')
  , lastFmApi = require('lastfmapi')
  , port = process.env.PORT || 3000
  , eventFetch = require('./eventFetch.js');
    dotenv.load();

module.exports = {
  initialize: function( server ) {
    this.server = server;
    this.port = port;
    this.io = require('socket.io').listen( this.server )
    this.API = process.env.API;
    this.SECRET = process.env.SECRET;
    this.USERNAME = process.env.USERNAME;
    this.KEY = process.env.KEY;
    this.eventFetch = eventFetch;
    this.listen();
  },
  listen: function(){
    this.server.listen( this.port, function(){
        console.log( "Node server successfuly listening on port: " + this.port )
        this.create();
    }.bind( this ));
  },
  create: function() {
    this.lastFm = new lastFmApi({
      'api_key': this.API,
      'secret': this.SECRET
    })

    this.session = {
      'username': this.USERNAME,
      'key': this.KEY
    }
    this.setSession();
  },
  setSession: function() {
    this.lastFm.setSessionCredentials( this.session.username, this.session.key );
    this.eventFetch.initialize( this.lastFm, this.io );
  }
}
