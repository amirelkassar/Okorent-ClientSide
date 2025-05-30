"use server";

import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { AuthResponse } from "./src/types";
import { bool } from "yup";
import { randomUUID } from "node:crypto";

type DecodedToken = {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
  Surname: string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role":
    | "Administrator"
    | "Client"
    | "User";
  exp: number;
  ClientId: string;
  userMembership: string;
  Membership: string;
  MembershipId: string;
  isPremium?: boolean;
};

type DecodeResponse = {
  userRole: "Administrator" | "Client" | "User";
  tokenExpireDate: Date;
  isPremium?: boolean;
} | null;

export const decodedToken = async (token: string): Promise<DecodeResponse> => {
  try {
    const decodedToken = decodeJwt(token) as DecodedToken;

    // MembershipId "3" = Premium, MembershipId "1" = Free
    const isPremium = decodedToken.MembershipId === "3";

    return {
      userRole:
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ],
      tokenExpireDate: new Date(decodedToken.exp * 1000),
      isPremium: isPremium,
    };
  } catch {
    return null;
  }
};

export const authDecodedToken = async (): Promise<AuthResponse | any> => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) throw new Error("Token not found");
    const decodedToken = decodeJwt(token) as DecodedToken;

    if (!decodedToken) {
      cookieStore.delete("accessToken");
      throw new Error("Invalid token");
    }

    const isPremium = decodedToken.MembershipId === "1";

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
      userID:
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ],
      userRole:
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ],
      membership: decodedToken.Membership,
      membershipId: decodedToken.MembershipId,
      token: token,
      isPremium: isPremium,
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
