// src/components/LandingPage.jsx
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/playlists'); // Redirect to playlists if the user is logged in
    }
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to the Music Playlist App</h1>
      <p>Your go-to app for managing playlists and discovering tracks!</p>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default LandingPage;
