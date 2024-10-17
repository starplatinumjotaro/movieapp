import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function CreateMovie() {
  const [newMovie, setNewMovie] = useState({ title: "", year: "", poster: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateMovie = async () => {
    setError("");
    try {
      const response = await axios.post('http://localhost:5000/api/movies', newMovie);
      if (response.status === 201) {
        navigate("/"); // Redirect to the movie list page
      }
    } catch (error) {
      if (error.response) {
        setError("An error occurred while creating the movie. Please try again.");
      } else if (error.request) {
        setError("No response from server. Check if the server is running.");
      } else {
        setError("Network error. Please check your connection.");
      }
    }
  };

  return (
    <div>
      <h1>Create New Movie</h1>
      <div className="create-movie-form">
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Year"
          value={newMovie.year}
          onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.poster}
          onChange={(e) => setNewMovie({ ...newMovie, poster: e.target.value })}
        />
        <button onClick={handleCreateMovie}>Create</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default CreateMovie;
