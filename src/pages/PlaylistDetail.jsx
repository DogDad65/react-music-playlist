import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylistDetail } from '../services/api';

function PlaylistDetail() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const playlistData = await getPlaylistDetail(id);
        setPlaylist(playlistData);
      } catch (error) {
        console.error("Error fetching playlist details:", error);
      }
    };

    fetchPlaylist();
  }, [id]);

  if (!playlist) return <p>Loading...</p>; // Show loading message until data is loaded

  return (
    <div>
      <h1>{playlist.name}</h1>
      <h2>Tracks:</h2>
      <ul>
        {playlist.tracks.map((track) => (
          <li key={track.id}>{track.name} by {track.artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistDetail;
