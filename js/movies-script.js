"use strict";

// Opgave 3 – Opret datastrukturen movies med de første 5 film.
// Opgave 11 – Tilføj de øvrige film fra movies.txt filen
// Hvert objekt skal have følgende properties: id, title, genre, year, duration, img, url
const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "science-fiction",
    year: 2010,
    duration: 2.28,
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "action",
    year: 2008,
    duration: 2.32,
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 3,
    title: "Forrest Gump",
    genre: "drama",
    year: 1994,
    duration: 2.22,
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 4,
    title: "Superbad",
    genre: "comedy",
    year: 2007,
    duration: 1.53,
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/",
  },
  {
    id: 5,
    title: "It",
    genre: "horror",
    year: 2017,
    duration: 2.15,
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/",
  },
  {
    id: 6,
    title: "The Hangover",
    genre: "comedy",
    year: 2009,
    duration: 1.4,
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/",
  },
  {
    id: 7,
    title: "The Conjuring",
    genre: "horror",
    year: 2013,
    duration: 1.52,
    img: "img/the-conjuring.webp",
    url: "https://www.imdb.com/title/tt1457767/",
  },
  {
    id: 8,
    title: "Interstellar",
    genre: "science-fiction",
    year: 2014,
    duration: 2.55,
    img: "img/interstellar.jpg",
    url: "https://www.imdb.com/title/tt0816692/",
  },
  {
    id: 9,
    title: "The Matrix",
    genre: "science-fiction",
    year: 1999,
    duration: 3.02,
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 10,
    title: "Pulp Fiction",
    genre: "drama",
    year: 1994,
    duration: 1.39,
    img: "img/pulp-fiction.webp",
    url: "https://www.imdb.com/title/tt0110912/",
  },
];

// Opgave 4 – Opret variablen moviesContainer
// Her opretter jeg en variabel som henter eller peger på id="exhibition-container" atribuetten over i html
const moviesContainer = document.querySelector("#movies-container");

// Opgave 5 – Opret funktionen displayMovies(movieList)
// Opgave 6 – Tøm containeren før filmene vises
// Opgave 7 – Brug forEach() til at gennemløbe filmene
// Opgave 8 – Vis film med innerHTML
// Opgave 9 – Tilføj billede og link
// Opgave 3.6 – Brug map() til at gennemløbe filmene
// Opgave 3.7 – Returnér HTML inde i map()
// Opgave 3.8 – Erstat pladsholderne med data fra movie
// Opgave 3.9 – Saml HTML-strengene med join("")
// Opgave 3.10 – Indsæt den færdige HTML i DOM’en
// Opgave 3.11 – Kald funktionen med filmdata
// Opgave 3.12 – Tilføj de resterende film fra movies.txt 

function displayMovies(movieList) {
  // før: moviesContainer.innerHTML = "";
  // før: movieList.forEach((item) => {
  // her opretter jeg en html struktur, hvor der skal være data fra min js-datastruktur
  // før: moviesContainer.innerHTML += `
  const html = movieList
    .map((movie) => {
      return `
    <article>
        <h2>${movie.title}</h2>
        <p>Genre: ${movie.genre}</p>
        <p>År: ${movie.year}</p>
        <p>Varighed: ${movie.duration}</p>

        <figure>
            <a href="${movie.url}" target="_blank" rel="noopener noreferrer">
                <img src="${movie.img}" alt= "${movie.title}">
            </a>
            <figcaption>${movie.title}</figcaption>
        </figure>
   </article>`;
    })
    .join("");

  moviesContainer.innerHTML = html;
}

// Opgave 10 – Kald funktionen med filmdata
displayMovies(movies);
