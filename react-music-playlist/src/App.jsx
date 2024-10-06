import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Playlists from './components/Playlists';
import Login from './components/Login';
import Signup from './components/Signup';
import TrackSearch from './components/TrackSearch';
import PlaylistDetail from './components/PlaylistDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Playlists />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<TrackSearch />} />
          <Route path="/playlist/:id" element={<PlaylistDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
