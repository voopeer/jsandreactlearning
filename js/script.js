const numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Останній переглянутий фільм?', ''),
      b = prompt('Як Ви його оціните?', ''),
      c = prompt('Останній переглянутий фільм?', ''),
      d = prompt('Як Ви його оціните?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);