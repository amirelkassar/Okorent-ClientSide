"use server";

import { cookies } from "next/headers";
interface TokenData {
  accessToken: string;
  expirationTime: string;
}
export async function storeToken(data: TokenData): Promise<boolean> {
  const cookie = cookies();

  try {
    cookie.set("accessToken", data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(data.expirationTime),
    });

    return true;
  } catch {
    return false;
  }
}

export async function getToken() {
  const cookie = cookies();

  try {
    return cookie.get("accessToken")?.value;
  } catch {
    return null;
  }
}

export async function clearToken() {
  const cookie = cookies();

  try {
    cookie.delete("accessToken");
    return true;
  } catch {
    return false;
  }
}
