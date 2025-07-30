import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './authContext';

export default function PrivateRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet/> : <Navigate to="/" replace />;
}