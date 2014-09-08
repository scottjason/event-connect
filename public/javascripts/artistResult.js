function ArtistResult(){}

ArtistResult.prototype.listen = function( socket ) {
  socket.on('artistResult', function( result ) {
  this.clean( result, this.prep.bind( this ) )
  }.bind( this ));
}

ArtistResult.prototype.clean = function( result, callback ) {
  var response = JSON.parse( result );
  callback( response, this.filter );
}

ArtistResult.prototype.prep = function( response, callback ) {
  var resultsArr = [];
  resultsArr.push( response.event );
  callback( resultsArr, this.render );
}

ArtistResult.prototype.filter = function( resultsArr, callback ) {
  callback( resultsArr );
}

ArtistResult.prototype.render = function( resultsArr ) {
  console.log( resultsArr );
}

var ArtistResult = new ArtistResult;
