"use server";

import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { AuthResponse } from "./src/types";

type DecodedToken = {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
  Surname: string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role":
    | "Administrator"
    | "Client";
  exp: number;
  ClientId: string;
};

type DecodeResponse = {
  userRole: "Administrator" | "Client";
  tokenExpireDate: Date;
} | null;

export const decodedToken = async (token: string): Promise<DecodeResponse> => {
  try {
    const decodedToken = decodeJwt(token) as DecodedToken;

    return {
      userRole:
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ],
      tokenExpireDate: new Date(decodedToken.exp * 1000),
    };
  } catch {
    return null;
  }
};

export const authDecodedToken = async (): Promise<AuthResponse> => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Token not found");
    const decodedToken = decodeJwt(token) as DecodedToken;

    if (!decodedToken) {
      cookieStore.delete("accessToken");
      throw new Error("Invalid token");
    }

    return {
      //userId: decodedToken.ClientId,
      userFirstName:
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
        ],
      //userLastName: decodedToken.Surname,
      userEmail:
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ],
      userRole:
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ],
    };
  } catch {
    return null;
  }
};

export const getToken = async () => {
  const token = cookies().get("accessToken")?.value;
  if (token) return token;
  else return "";
};
