// src/components/Playlists.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlaylists } from '../services/api';

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const playlistsData = await getPlaylists();
        setPlaylists(playlistsData);
      } catch (error) {
        console.error("Failed to fetch playlists:", error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h1>Your Playlists</h1>
      <Link to="/playlists/new">
        <button>Create New Playlist</button>
      </Link>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id || playlist._id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Playlists;
