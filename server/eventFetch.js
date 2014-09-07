var app = require('./appConfig.js');

module.exports = {
  initialize: function( lastFm, io ) {
    this.lastFm = lastFm;
    this.io = io;
    this.collect();
  },
  collect: function(){
    this.io.on('connection', function ( socket ) {
      socket.on('geoPass', function ( lat, lon ) {
      this.requestByGeo( lat, lon );
    }.bind( this ));
   }.bind( this ));
  },
  requestByGeo: function( lat, lon ){
    this.lastFm.geo.getEvents({ 'lat': lat, 'long': lon }, function( err, data ) {
      if ( err ) {
        return console.log( err );
      }
      var result = JSON.stringify( data );
      this.io.sockets.emit( 'geoResult', result );
    }.bind( this ));
  },
  requestByArtist: function( artist ) {
    this.lastFm.artist.getEvents({ 'artist': artist }, function( err, data ) {
      if ( err ) {
        return console.log( err );
      }
      var result = JSON.stringify( data );
      this.io.sockets.emit( 'artistResult', result );
    }.bind( this ));
  }
}