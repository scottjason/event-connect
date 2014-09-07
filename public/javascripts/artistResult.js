function ArtistResult(){}

ArtistResult.prototype.listen = function( socket ) {
  socket.on('artistResult', function( result ) {
  this.clean( result )
  }.bind( this ));
}

ArtistResult.prototype.clean = function( result ) {
  var response = JSON.parse( result );
  console.log( response );
}

ArtistResult.prototype.filter = function() {}

ArtistResult.prototype.render = function() {}

var ArtistResult = new ArtistResult;



