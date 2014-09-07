function GeoResult(){}

GeoResult.prototype.listen = function( socket ) {
  socket.on('geoResult', function( result ) {
  this.clean( result )
  }.bind( this ));
}

GeoResult.prototype.clean = function( result ) {
  var response = JSON.parse(result)
  console.log(response)
}

GeoResult.prototype.filter = function() {}

GeoResult.prototype.render = function() {}

var GeoResult = new GeoResult;



