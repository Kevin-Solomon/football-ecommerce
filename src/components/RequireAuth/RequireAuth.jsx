import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './../../context/auth/authContext';

function RequireAuth({ children }) {
  const { pathname } = useLocation();
  console.log(location.pathname);
  const { token } = useAuth();
  return token.token === null ? (
    <Navigate to="/login" replace state={{ prevPath: pathname }} />
  ) : (
    children
  );
}

export default RequireAuth;
