import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/log-in" replace />;
  }
  return children;
};
