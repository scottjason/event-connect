function ArtistFetch() {}

ArtistFetch.prototype.listen = function( socket ) {
  this.socket = socket;
  var selectedArtist = document.getElementById("artistFormInput");
  selectedArtist.addEventListener( "submit", this.callback.bind( this ), false );
}

ArtistFetch.prototype.callback = function( event ) {
  event.preventDefault();
  var artistToFetch = event.target.elements.artist.value;
  this.pass( artistToFetch );
}

ArtistFetch.prototype.pass = function( artist ) {
  this.socket.emit( 'artistPass', artist );
}

var ArtistFetch = new ArtistFetch;


