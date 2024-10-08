import { useState } from 'react';
import { searchSpotifyTracks } from '../services/api';

function TrackSearch() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const results = await searchSpotifyTracks(query);
      setTracks(results); // Update state with the search results
    } catch (error) {
      console.error("Track search failed:", error);
    }
  };

  return (
    <div>
      <h1>Search Tracks</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a track"
          required
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.name} by {track.artists[0].name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrackSearch;
