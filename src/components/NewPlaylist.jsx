// src/components/NewPlaylist.jsx
import { useState } from 'react';
import { createPlaylist, searchSpotifyTracks } from '../services/api';

function NewPlaylist() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPlaylist({ name, description, tracks: selectedTracks });
      setMessage('Playlist created successfully!');
      setName('');
      setDescription('');
      setSelectedTracks([]);
    } catch (error) {
      setMessage('Failed to create playlist');
      console.error("Error creating playlist:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const results = await searchSpotifyTracks(searchQuery);
      setSearchResults(results.tracks);
    } catch (error) {
      console.error("Error searching tracks:", error);
    }
  };

  const addTrackToPlaylist = (track) => {
    setSelectedTracks([...selectedTracks, track]);
  };

  return (
    <div style={styles.container}>
      <h2>Create New Playlist</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Playlist Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Playlist Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Create Playlist</button>
      </form>

      <h3>Search for Tracks</h3>
      <input
        type="text"
        placeholder="Search tracks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>Search</button>

      <div>
        {searchResults.map((track) => (
          <div key={track.id} style={styles.track}>
            {track.name} by {track.artist}
            <button onClick={() => addTrackToPlaylist(track)} style={styles.addButton}>
              Add to Playlist
            </button>
          </div>
        ))}
      </div>

      <h3>Selected Tracks</h3>
      <ul>
        {selectedTracks.map((track) => (
          <li key={track.id}>{track.name} by {track.artist}</li>
        ))}
      </ul>

      {message && <p>{message}</p>}
    </div>
  );
}

const styles = {
  container: { padding: '2rem', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  input: { padding: '0.5rem', marginBottom: '1rem', width: '100%' },
  textarea: { padding: '0.5rem', marginBottom: '1rem', width: '100%', height: '100px' },
  button: { padding: '0.5rem 1rem', backgroundColor: '#1DB954', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  track: { display: 'flex', justifyContent: 'space-between', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '0.5rem' },
  addButton: { padding: '0.3rem 0.6rem', backgroundColor: '#1DB954', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' },
};

export default NewPlaylist;
