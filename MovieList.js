import "./MovieList.css";

const MovieList = ({ movies, onDelete, onEdit }) => {
  return (
    <div className="movie-container">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="button-container">
              <button onClick={() => onEdit(movie)}>Edit</button>
              <button onClick={() => onDelete(movie.id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MovieList;
