function GeoResult(){}

GeoResult.prototype.initialize = function( socket ) {
  socket.on('geoResult', function( result ) {
  this.clean( result, this.filter.bind( this ) )
  }.bind( this ));
}

GeoResult.prototype.clean = function( result, callback ) {
  var response = JSON.parse(result);
  callback( response, this.render );
}

GeoResult.prototype.filter = function( response, callback ) {
    // var filteredArr = [];
    // for( var i = 0; i < response.event.length; i++ ){
    // filteredArr.push( _.pick( response.event[i], 'artists', 'image', 'startDate', 'tags', 'title', 'url', 'venue' ) );

  callback( response );
}

GeoResult.prototype.render = function( response ) {
// var startDate = _.pluck(arr, 'startDate');
// console.log( response )

var template = $('#geoTemplate').html();
var output = Mustache.render(template, response);
$('#geoTarget').append(output);

}

var GeoResult = new GeoResult;


