// /services/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Adjust as needed for production

// Helper function to get the token from localStorage
const getAuthToken = () => localStorage.getItem("token");

// Function to sign up a new user
export const signupUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error.response?.data || error.message);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error;
  }
};

// Function to get playlists for a logged-in user
export const getPlaylists = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/playlists`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching playlists:", error.response?.data || error.message);
    throw error;
  }
};

// Function to search for Spotify tracks
export const searchSpotifyTracks = async (query) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/spotify/tracks?query=${encodeURIComponent(query)}`,
      {
        headers: { Authorization: `Bearer ${getAuthToken()}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching for tracks:", error.response?.data || error.message);
    throw error;
  }
};

// Function to fetch details for a specific playlist
export const getPlaylistDetail = async (playlistId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/playlists/${playlistId}`,
      {
        headers: { Authorization: `Bearer ${getAuthToken()}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching playlist details:", error.response?.data || error.message);
    throw error;
  }
};

// Function to create a new playlist
export const createPlaylist = async (playlistData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/playlists`,
      playlistData,
      {
        headers: { Authorization: `Bearer ${getAuthToken()}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating playlist:", error.response?.data || error.message);
    throw error;
  }
};
