// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token'); // Check if user is authenticated
  return token ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
