$( document ).ready(function() {

function GeoFetch(){
  this.socket = io.connect();
}

GeoFetch.prototype.collect = function() {
   navigator.geolocation.getCurrentPosition( this.callback.bind( this ) );
}

GeoFetch.prototype.callback = function( position ) {
  this.socket.emit( 'geoPass', position.coords.latitude, position.coords.longitude );
  this.openSockets();
}

GeoFetch.prototype.openSockets = function() {
  GeoResult.listen( this.socket );
  ArtistResult.listen( this.socket );
}

var GeoFetch = new GeoFetch;
GeoFetch.collect();
})
















