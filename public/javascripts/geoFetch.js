$( document ).ready(function() {

function GeoFetch(){
  this.socket = io.connect();
}

GeoFetch.prototype.initialize = function() {
  if ( navigator.geolocation && typeof ( navigator.geolocation.getCurrentPosition ) == "function") {
       navigator.geolocation.getCurrentPosition( this.geoCallback.bind( this ) );
  }
}

GeoFetch.prototype.geoCallback = function( position ) {
  this.socket.emit( 'geoPass', position.coords.latitude, position.coords.longitude );
  var latLng = new google.maps.LatLng( position.coords.latitude, position.coords.longitude );
  var coder = new google.maps.Geocoder();
      coder.geocode( { 'latLng': latLng }, this.reverseGeoCallback.bind( this ) );
}

GeoFetch.prototype.reverseGeoCallback = function( results, status ) {
   if ( status == google.maps.GeocoderStatus.OK ) {
      var userLocation = results[1].formatted_address;
   }
   console.log( userLocation );
   this.openSockets();
}

GeoFetch.prototype.openSockets = function() {
  GeoResult.initialize( this.socket );
  ArtistResult.initialize( this.socket );
  ArtistFetch.initialize( this.socket );
}

var GeoFetch = new GeoFetch;
GeoFetch.initialize();
})














