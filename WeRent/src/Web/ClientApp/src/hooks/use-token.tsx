'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

// Define the context type
type TokenContextType = string | null;

// Create the context with the appropriate type
const TokenContext = createContext<TokenContextType>(null);

interface TokenProviderProps {
  children: ReactNode;
  value: string | null;
}

export const TokenProvider = ({ children, value }: TokenProviderProps) => {
  const [token] = useState<TokenContextType>(value);

  return (
    <TokenContext.Provider value={token}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = (): TokenContextType => {
  const context = useContext(TokenContext);
  if (context === null) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
};
