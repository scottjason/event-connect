function GeoResult(){}

GeoResult.prototype.initialize = function( socket ) {
  socket.on('geoResult', function( result ) {
    this.clean( result, this.renderGeoEvents.bind( this ) )
  }.bind( this ));
}

GeoResult.prototype.clean = function( result, callback ) {
  var response = JSON.parse(result);
      callback( response );
}

GeoResult.prototype.renderGeoEvents = function( response ) {
  var template = $('#geoTemplate').html();
  var output = Mustache.render( template, response );

  var welcomeText = document.getElementById( 'welcome-text' )
      welcomeText.style.display='none';

  var artistSelector = document.getElementById( 'artistFormInput' );
      artistSelector.style.display='inline-block';
      $('#geoTarget').append( output );
}

var GeoResult = new GeoResult;


