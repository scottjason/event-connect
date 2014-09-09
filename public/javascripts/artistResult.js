function ArtistResult(){}

ArtistResult.prototype.initialize = function( socket ) {
  socket.on('artistResult', function( result ) {
  this.clean( result, this.renderArtistQuery.bind( this ) )
  }.bind( this ));
}

ArtistResult.prototype.clean = function( result, callback ) {
  var response = JSON.parse( result );
      callback( response );
}

ArtistResult.prototype.renderArtistQuery = function( response ) {
var template = $('#geoTemplate').html();
Mustache.parse(template);
var output = Mustache.render( template, response );
$('#geoTarget').html( output );
}

var ArtistResult = new ArtistResult;
