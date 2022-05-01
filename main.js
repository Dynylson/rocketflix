import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const $btn = document.querySelector("button");
const $movieContainer = document.querySelector("[data-movie]");
const $telaError = document.querySelector(".tela-error");

const $img = document.querySelector("[data-movie] img");
const $h2 = document.querySelector("[data-movie] h2");
const $p = document.querySelector("[data-movie] p");

let id = 2;

const fetchMovie = async () => {
  try {
    const url = `${BASE_URL}${id}?api_key=${API_KEY}`;
    const movieResponse = await fetch(url);
    const movieJson = await movieResponse.json();
    const { title, overview, poster_path, status_message } = movieJson;
    if (!status_message) {
      if ($telaError) {
        $telaError.classList.remove("active");
      }
      $movieContainer.classList.add("active");
      $img.src = IMG_URL + poster_path;
      $img.alt = title;
      $h2.innerText = title;
      $p.innerText = overview;
    } else if (status_message) {
      $movieContainer.classList.remove("active");
      $telaError.classList.add("active");
    }
  } catch (erro) {
    console.log(erro);
  }
};

$btn.addEventListener("click", () => {
  fetchMovie();
  id++;
});
