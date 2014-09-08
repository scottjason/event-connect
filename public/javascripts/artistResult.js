function ArtistResult(){}

ArtistResult.prototype.initialize = function( socket ) {
  socket.on('artistResult', function( result ) {
  this.clean( result, this.filter.bind( this ) )
  }.bind( this ));
}

ArtistResult.prototype.clean = function( result, callback ) {
  var resultsArr = [];
  var response = JSON.parse( result );
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
