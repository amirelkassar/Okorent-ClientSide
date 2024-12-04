'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

// Define the context type
type TokenContextType = string | any;

// Create the context with the appropriate type
export const TokenContext = createContext<TokenContextType>(null);

interface TokenProviderProps {
  children: ReactNode;
  value: string | any;
}

export const TokenProvider = ({ children, value }: TokenProviderProps) => {
  const [token] = useState<TokenContextType>(value);

  return (
    <TokenContext.Provider value={token}>
      {children}
    </TokenContext.Provider>
  );
};

