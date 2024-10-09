import { useState } from 'react';
import { searchSpotifyTracks } from '../services/api';

function TrackSearch() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await searchSpotifyTracks(query);
      setTracks(results);
    } catch (error) {
      console.error("Failed to fetch tracks:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Search Tracks</h1>
      <div style={styles.searchBox}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a track or artist..."
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>Search</button>
      </div>
      <div style={styles.results}>
        {tracks.map((track, index) => (
          <div key={index} style={styles.trackItem}>
            <p style={styles.trackName}>
              {track.name}
              {track.artist && <span style={styles.artistName}> by {track.artist}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#ffffff',
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    width: '200px',
    marginRight: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#1DB954',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  results: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  trackItem: {
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#ffffff',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '500px',
  },
  trackName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: '1rem',
    fontStyle: 'italic',
    color: '#cccccc',
  },
};

export default TrackSearch;
