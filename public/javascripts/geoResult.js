function GeoResult(){}

GeoResult.prototype.listen = function( socket ) {
  socket.on('geoResult', function( result ) {
  this.clean( result, this.filter.bind( this ) )
  }.bind( this ));
}

GeoResult.prototype.clean = function( result, callback ) {
  var resultsArr = [];
  var response = JSON.parse(result);
    resultsArr.push( response.event );
  callback( resultsArr, this.render );
}

GeoResult.prototype.filter = function( resultsArr, callback ) {
  var property = ['artist', 'image', 'startDate', 'title', 'url', 'venue'];
  var filteredArr = [];

  for (var i = 0; i < resultsArr.length; i++) {
    for ( property in resultsArr[i] ) {
      if ( !resultsArr[i].hasOwnProperty( property ) ) continue;

        filteredArr.push( resultsArr[i][property] );
    }
  }
  callback( filteredArr );
}

GeoResult.prototype.render = function(arr) {
  // console.log(arr)
}

var GeoResult = new GeoResult;
