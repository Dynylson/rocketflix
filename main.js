import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const url =
  "https://api.themoviedb.org/3/movie/550?api_key=ee6c522f6ee1372ba637b097a93e6d60";

const fetchMovie = async () => {
  const movieResponse = await fetch(url);
  const movieJson = await movieResponse.json();
  console.log(movieJson);
};

fetchMovie();
