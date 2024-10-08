// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/'); // Redirect to landing page after logout
  };

  return (
    <nav>
      <Link to="/playlists">Playlists</Link>
      <Link to="/search">Search</Link>
      {token && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
