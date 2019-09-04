const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAllFilmTitles = function() {
  return this.films.map(film => film.title)
}

Cinema.prototype.getFilmByTitle = function(title) {
  const foundFilm = this.films.find( film => film.title === title )
  return foundFilm
}



module.exports = Cinema;
