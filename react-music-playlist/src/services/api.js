// /services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const loginUser = (email, password) => {
  return axios.post(`${API_BASE_URL}/auth/login`, { email, password });
};

export const getPlaylists = (token) => {
  return axios.get(`${API_BASE_URL}/api/playlists`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const searchSpotifyTracks = (query) => {
  return axios.get(`${API_BASE_URL}/api/spotify/tracks?query=${query}`);
};
