import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [alunoId, setAlunoId] = useState(null);

  return (
    <UserContext.Provider value={{ username, setUsername, alunoId, setAlunoId }}>
      {children}
    </UserContext.Provider>
  );
};
