import React, { createContext, useState } from "react";

export const RelatoContext = createContext();

export const RelatoProvider = ({ children }) => {
  const [relatos, setRelatos] = useState([]);

  const adicionarRelato = (novoRelato) => {
    const relatoComId = { ...novoRelato, id: Math.random().toString() };
    setRelatos((prevRelatos) => [...prevRelatos, relatoComId]);
    console.log("Relatos atualizados:", [...relatos, relatoComId]);
  };

  return (
    <RelatoContext.Provider value={{ relatos, adicionarRelato, setRelatos }}>
      {children}
    </RelatoContext.Provider>
  );
};