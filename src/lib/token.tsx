"use server";

import { decodedToken } from "@/token";
import { cookies } from "next/headers";
interface TokenData {
  accessToken: string;
  tokenExpireDate: string;
}
export async function storeToken(data: any) {
  const cookie = cookies();
  console.log(data);
  const exp = await decodedToken(data);
  try {
    cookie.set("accessToken", data, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(exp?.tokenExpireDate || ""),
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
