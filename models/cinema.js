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

Cinema.prototype.getFilmbyGenre = function (genre) {
  const foundFilms = this.films.filter( film => film.genre === genre )
  return foundFilms
};

Cinema.prototype.checkFilmsByYear = function (year) {
  const checkResult = this.films.some( film => {
    return film.year === year
  });
    return checkResult
};

Cinema.prototype.areAllFilmsOfMinLength = function (length) {
  return this.films.every((film) => {
    return film.length >= length;
  });
};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
};

module.exports = Cinema;
