import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieRating from "./components/MovieRating";
import CreateMovie from "./components/CreateMovie";
import MovieDetails from "./components/MovieDetails";
import { fetchMovies } from "./movieservice";
import "./App.css"; 

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <div className="app-container">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
