import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { api } from '@/src/api/axios';
import { auth } from '@/src/api/auth';
import { jwtDecode } from 'jwt-decode';
import { storeToken } from '@/src/lib/token';

// Replace with your actual Google Client ID
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

interface CustomGoogleAuthProviderProps {
  children: React.ReactNode;
}

interface GoogleTokenPayload {
  email: string;
  name: string;
  picture: string;
  sub: string;
  aud: string;
  iss: string;
}

interface LoginResponse {
  token: string;
  success: boolean;
  message?: string;
}

export const GoogleAuthProvider: React.FC<CustomGoogleAuthProviderProps> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
};

export const handleGoogleLogin = async (credential: string) => {
  try {
    // Log the incoming Google credential
    console.log('Received Google credential:', credential.substring(0, 50) + '...');

    // 1. Send only the token string in the request body
    console.log('Sending to backend:', {
      url: auth.login.google,
      payload: { token: credential.substring(0, 50) + '...' }
    });

    const response = await api.post(auth.login.google, {
      token: credential  // This is the raw credential token from Google
    });

    // Log the response from backend
    console.log('Backend response:', {
      status: response.status,
      data: response.data
    });

    // 2. Verify we received a JWT token from our backend
    if (!response.data?.token) {
      throw new Error('No JWT token received from server');
    }

    // 3. Store the JWT token
    const jwtToken = response.data.token;
    
    // Add Bearer prefix for Authorization header
    const authToken = `Bearer ${jwtToken}`;
    
    // Store in localStorage
    localStorage.setItem('token', authToken);
    
    // 4. Set up for subsequent API calls
    api.defaults.headers.common['Authorization'] = authToken;
    
    // Store in cookies for server-side auth
    await storeToken(jwtToken);

    // Log successful setup
    console.log('Auth setup complete:', {
      tokenStored: !!localStorage.getItem('token'),
      authHeader: !!api.defaults.headers.common['Authorization']
    });

    return response;
  } catch (error: any) {
    // Log detailed error information
    console.error('Google login failed:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
}; 