// import axios from "axios";
// import { useEffect, useState } from "react";

// const Film = () => {
//   const [getFilm, setFilm] = useState("");
//   const [apiKey, setApiKey] = useState("");
//   const [filmData, setFilmData] = useState("");

//   const getTitle = (e) => {
//     e.preventDefault();
//     setFilm(e.target.value);
//     console.log(e);
//   };

//   const getApi = (e) => {
//     e.preventDefault();
//     setApiKey(e.target.value);
//     console.log(e);
//   };

//   const filmSearch = () => {
//     const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${getFilm}`;
//     axios.get(url).then((response) => {
//       setFilmData(response.data);
//     });
//   };

//   return (
//     <>
//       <h2>Film Request</h2>
//       <input
//         type="text"
//         placeholder="enter API key here"
//         value={apiKey}
//         onChange={(e) => getApi(e)}
//       />

//       <input
//         type="text"
//         placeholder="enter film title here"
//         value={getFilm}
//         onChange={(e) => getTitle(e)}
//       />
//       <button onClick={filmSearch}>click</button>

//       <p>{filmData.Title}</p>
//     </>
//   );
// };

// export default Film;

import React, { useState } from "react";
import axios from "axios";

const MovieSearch = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [movieData, setMovieData] = useState(null);

  const handleMovieTitleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleSearch = () => {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;
    axios.get(url).then((response) => {
      setMovieData(response.data);
    });
  };

  return (
    <div>
      <h1>Search for a movie</h1>
      <div>
        <label htmlFor="movieTitle">Movie Title:</label>
        <input
          type="text"
          id="movieTitle"
          value={movieTitle}
          onChange={handleMovieTitleChange}
        />
      </div>
      <div>
        <label htmlFor="apiKey">API Key:</label>
        <input
          type="text"
          id="apiKey"
          value={apiKey}
          onChange={handleApiKeyChange}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      {movieData && (
        <div>
          <h2>{movieData.Title}</h2>
          <img src={movieData.Poster} alt={movieData.Title} />
          <p>Director: {movieData.Director}</p>
          <p>Actors: {movieData.Actors}</p>
          <p>Plot: {movieData.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
