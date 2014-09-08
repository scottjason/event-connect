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
  $('#geoTarget').append( output );
}

var GeoResult = new GeoResult;


