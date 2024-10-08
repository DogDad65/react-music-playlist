// /services/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Update to your server’s actual URL if needed

// Helper function to get the token from localStorage
const getAuthToken = () => localStorage.getItem("token");

export const signupUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
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
    console.error("Error logging in:", error);
    throw error;
  }
};

// Function to get the playlists for a logged-in user
export const getPlaylists = async () => {
  const token = getAuthToken();
  try {
    const response = await axios.get(`${API_BASE_URL}/api/playlists`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching playlists:", error);
    throw error;
  }
};

// Function to search Spotify for tracks
export const searchSpotifyTracks = async (query) => {
  const token = getAuthToken();
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/spotify/tracks?query=${query}`,
      {
        headers: { Authorization: `Bearer ${token}` }, // Include token if needed for backend Spotify requests
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching for tracks:", error);
    throw error;
  }
};

export const getPlaylistDetail = async (playlistId) => {
  const token = localStorage.getItem("token"); // Replace with your method of retrieving the token
  try {
    const response = await axios.get(`${API_BASE_URL}/api/playlists/${playlistId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching playlist details:", error);
    throw error;
  }
};