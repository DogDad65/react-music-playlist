// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Playlists from "./components/Playlists";
import TrackSearch from "./components/TrackSearch";
import ProtectedRoute from "./components/ProtectedRoute";
import PlaylistDetail from "./pages/PlaylistDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route for LandingPage */}
        <Route path="/" element={<LandingPage />} />

        {/* Public routes for login and signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes with Navbar included */}
        <Route
          path="/playlists"
          element={
            <ProtectedRoute>
              <>
                <Navbar /> {/* Include Navbar here */}
                <Playlists />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <ProtectedRoute>
              <>
                <Navbar /> {/* Include Navbar here */}
                <PlaylistDetail />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <>
                <Navbar /> {/* Include Navbar here */}
                <TrackSearch />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
