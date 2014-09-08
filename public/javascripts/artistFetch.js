function ArtistFetch() {}

ArtistFetch.prototype.listen = function(socket) {
  this.socket = socket;
  var selectedArtist = document.getElementById("artistFormInput");
  selectedArtist.addEventListener("submit", this.collect.bind( this ), false)
}

ArtistFetch.prototype.collect = function(event) {
  event.preventDefault();
  var artistToFetch = event.target.elements.artist.value
  this.pass( artistToFetch );
}

ArtistFetch.prototype.pass = function( artist ) {
  this.socket.emit( 'artistPass', artist );
}

var ArtistFetch = new ArtistFetch;


