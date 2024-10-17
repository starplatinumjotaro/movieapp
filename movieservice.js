import axios from "axios";

const API_KEY = "090a0a3d7ac5d855e816ebb1d51c29d8";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
