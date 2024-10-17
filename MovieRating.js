import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const MovieRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const changeRating = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating); // If you need to send rating back to API or parent component
  };

  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      changeRating={changeRating}
      numberOfStars={5}
      name='rating'
      starDimension="25px"
      starSpacing="5px"
    />
  );
};

export default MovieRating;