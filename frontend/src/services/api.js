const API_KEY = "4d5337fb9305a9a1cd4556d1613dcf2a";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const reponse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await reponse.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const reponse = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await reponse.json();
  return data.results;
};
