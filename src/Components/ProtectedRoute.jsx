import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
