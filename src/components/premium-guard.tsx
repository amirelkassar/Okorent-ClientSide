"use client";

import { GetUserInfo } from "@/src/hooks/queries/user/home/user-info";
import { useRouter } from "next/navigation";
import ROUTES from "@/src/routes";
import { useToken } from "@/src/hooks/use-token";
import { authDecodedToken } from "@/token";
import { useEffect, useState } from "react";

interface PremiumGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  redirectOnFailure?: boolean; // option to redirect or just show fallback
}

export function PremiumGuard({
  children,
  fallback,
  redirectOnFailure = true,
}: PremiumGuardProps) {
  const { token } = useToken();
  const [userId, setUserId] = useState<string | null>(null);
  const [isPremium, setIsPremium] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function checkPremiumStatus() {
      if (token) {
        const decoded = await authDecodedToken();
        if (decoded) {
          setUserId(decoded?.userID);

          // If we already know from the token that user is premium
          if (decoded.isPremium === true) {
            setIsPremium(true);
            return;
          }
        }
      }
    }

    checkPremiumStatus();
  }, [token]);

  // Use API call as a fallback to verify premium status if not in token
  const { data: userData, isLoading } = GetUserInfo(userId);

  // If we're checking with the token and don't know yet, or if we're loading user data
  if ((isPremium === null && isLoading) || !userId) {
    return fallback || null;
  }

  // If we already know from token or API that the user is not premium
  if (isPremium === false || (isPremium === null && userData && !userData?.data?.isPremium)) {
    if (redirectOnFailure) {
      router.replace(ROUTES.USER.SUBSCRIPTION);
      return null;
    }
    return fallback || null;
  }

  // If we already know from token that user is premium, don't check API
  if (isPremium === true) {
    return <>{children}</>;
  }

  // If the API confirms the user is premium, update our state
  if (userData?.data?.isPremium && isPremium === null) {
    setIsPremium(true);
  }

  return <>{children}</>;
}
