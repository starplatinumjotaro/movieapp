import React, { useState, useEffect } from 'react';
import MovieRating from './MovieRating'; // Import the rating component

const MovieDetail = ({ movie }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Fetch the movie rating from your API if you have one, and set it
    // setRating(movie.rating || 0); // Example if rating is in movie data
  }, [movie]);

  const handleRatingChange = (newRating) => {
    // Update rating logic here (e.g., send the new rating to your backend)
    setRating(newRating);
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      
      {/* Display the movie rating */}
      <MovieRating initialRating={rating} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default MovieDetail;