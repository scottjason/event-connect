$( document ).ready(function() {

function GeoFetch(){
  this.socket = io.connect();
}

GeoFetch.prototype.initialize = function() {
    var artistSelector = document.getElementById( 'artistFormInput' );
        artistSelector.style.display='none';

    var welcomeText = document.getElementById( 'welcome-text' );
        welcomeText.style.display='inline-block';



  if ( navigator.geolocation && typeof ( navigator.geolocation.getCurrentPosition ) == "function") {
       navigator.geolocation.getCurrentPosition( this.geoCallback.bind( this ), this.errorHandler.bind( this ), { maximumAge: 75000 } );
  }
}

GeoFetch.prototype.geoCallback = function( position ) {
  this.renderLoading();
  this.socket.emit( 'geoPass', position.coords.latitude, position.coords.longitude );

  var latLng = new google.maps.LatLng( position.coords.latitude, position.coords.longitude );
  var coder = new google.maps.Geocoder();
      coder.geocode( { 'latLng': latLng }, this.reverseGeoCallback.bind( this ) );
}

GeoFetch.prototype.reverseGeoCallback = function( results, status ) {
   if ( status == google.maps.GeocoderStatus.OK ) {
      var userLocation = results[1].formatted_address;
   }
   this.renderLoading( userLocation );
   this.openSockets();
}

GeoFetch.prototype.openSockets = function() {
  GeoResult.initialize( this.socket );
  ArtistResult.initialize( this.socket );
  ArtistFetch.initialize( this.socket );
}

GeoFetch.prototype.renderLoading = function( location ) {
// var template = "{{location}}";
// html = Mustache.to_html(template, location);
// document.write(html)
}

GeoFetch.prototype.errorHandler = function( error ) {
   if ( error.code == 1 ) {
    alert( 'We were unable to collect your location. You many need to modify your browser settings.' );
  }
}

var GeoFetch = new GeoFetch;
GeoFetch.initialize();
})














