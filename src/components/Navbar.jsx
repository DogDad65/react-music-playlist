// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Only show Playlists and Search links if the user is logged in */}
      {token ? (
        <>
          <Link to="/playlists">Playlists</Link>
          <Link to="/search">Search</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        // Show an empty navbar or other elements if desired for non-logged-in users
        <span></span>
      )}
    </nav>
  );
}

export default Navbar;
