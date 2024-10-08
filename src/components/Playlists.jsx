import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlaylists } from '../services/api';

function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const playlistsData = await getPlaylists();
        setPlaylists(playlistsData);
      } catch (error) {
        console.error("Failed to fetch playlists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  if (loading) return <p>Loading playlists...</p>;

  return (
    <div>
      <h1>Your Playlists</h1>
      {playlists.length > 0 ? (
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No playlists available. Start creating your first playlist!</p>
      )}
    </div>
  );
}

export default Playlists;
