'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

// Define the context type
interface TokenContextType {
  token: any | null;
  setToken: (token: any | null) => void;
}


// Create the context with the appropriate type
export const TokenContext = createContext<TokenContextType | undefined>(undefined);

interface TokenProviderProps {
  children: ReactNode;
  value: string | any;
}

export const TokenProvider = ({ children, value }: TokenProviderProps) => {
  const [token,setToken] = useState<any>(value);

  return (
    <TokenContext.Provider value={{token,setToken}} >
      {children}
    </TokenContext.Provider>
  );
};
export const useToken = (): TokenContextType => {
  const context = useContext(TokenContext);

  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }

  return context;
};

