import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({ token: null });

import React from 'react';

function AuthProvider({ children }) {
  const [token, setToken] = useState({ token: null, user: null });
  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);
  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
