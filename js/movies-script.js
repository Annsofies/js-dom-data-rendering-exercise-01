"use strict";

// Opgave 3 – Opret datastrukturen movies med de første 5 film.
// Hvert objekt skal have følgende properties: id, title, genre, year, duration, img, url
const movies = [
  {
    id: 1,
    titel: "Inception",
    genre: "science-fiction",
    year: 2010,
    duration: 2.28,
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    id: 2,
    titel: "The Dark Knight",
    genre: "action",
    year: 2008,
    duration: 2.32,
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 3,
    titel: "Forrest Gump",
    genre: "drama",
    year: 1994,
    duration: 2.22,
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 4,
    titel: "Superbad",
    genre: "comedy",
    year: 2007,
    duration: 1.53,
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/",
  },
  {
    id: 5,
    titel: "It",
    genre: "horror",
    year: 2017,
    duration: 2.15,
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/",
  },
];

// Opgave 4 – Opret variablen moviesContainer
// Her opretter jeg en variabel som henter eller peger på id="exhibition-container" atribuetten over i html
const moviesContainer = document.querySelector("#movies-container");

// Opgave 5 – Opret funktionen displayMovies(movieList)
// Opgave 6 – Tøm containeren før filmene vises
// Opgave 7 – Brug forEach() til at gennemløbe filmene
// Opgave 8 – Vis film med innerHTML
function displayMovies(movieList) {
  moviesContainer.innerHTML = "";
  movies.forEach((item) => {
    // her opretter jeg en html struktur, hvor der skal være data fra min js-datastruktur
    moviesContainer.innerHTML += `
    <article>
        <h2>${item.titel}</h2>
        <p>Genre: ${item.genre}</p>
        <p>År: ${item.year}</p>
        <p>Varighed: ${item.duration}</p>
    </article>
    <figure>
    <!-- Skal benyttes i opgave 9 -->
    </figure>
    </article>`;
  });
}
