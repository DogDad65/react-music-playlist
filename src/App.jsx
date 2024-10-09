import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Playlists from "./components/Playlists";
import TrackSearch from "./components/TrackSearch";
import ProtectedRoute from "./components/ProtectedRoute";
import { PlaylistDetail } from "./pages/PlaylistDetail";
import Navbar from "./components/Navbar";
import NewPlaylist from './components/NewPlaylist';

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      {token && <Navbar className="navbar" />}
      <div className="content"> {/* Adds padding for fixed navbar */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/playlists"
            element={
              <ProtectedRoute>
                <Playlists />
              </ProtectedRoute>
            }
          />
          <Route
            path="/playlists/new"
            element={
              <ProtectedRoute>
                <NewPlaylist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <TrackSearch />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
