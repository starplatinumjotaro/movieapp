import { useState } from "react";
import "./SearchBar.css";
import CreateMovie from "./CreateMovie.js";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [showCreateMovie, setShowCreateMovie] = useState(false);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleCreateClick = () => {
    setShowCreateMovie(true);
  };

  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        placeholder="Search for a movie..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={CreateMovie}>Create</button>

      {showCreateMovie && <CreateMovie />}
    </div>
    
    
  );
};

export default SearchBar;
