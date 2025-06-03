'use client';

import React, { useState, useEffect } from "react";
import NavLinks from "./_components/navLinks";
import NavLinksPremium from "@/src/app/[locale]/premium/_components/navLinks";
import Nav from "@/src/components/nav";
import Footer from "@/src/components/footer";
import ROUTES from "@/src/routes";
import { NotificationsHub } from "@/src/components/notifications-hub";
import { useToken } from "@/src/hooks/use-token";
import { authDecodedToken } from "@/token";
import { GetUserInfo } from '@/src/hooks/queries/user/home/user-info';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    const { token } = useToken();
    const [userId, setUserId] = useState<string | null>(null);
    const [isPremium, setIsPremium] = useState<boolean | null>(null);

    useEffect(() => {
        async function initializeAuth() {
            if (token) {
                const decoded = await authDecodedToken();
                if (decoded?.userID) {
                    setUserId(decoded.userID);
                    // Set initial premium status from token
                    setIsPremium(decoded.membershipId === "3");
                }
            }
        }
        initializeAuth();
    }, [token]);

    const { data: userData, isLoading } = GetUserInfo(userId);

    // Update premium status from API response if different
    useEffect(() => {
        if (userData?.data?.memberShipName) {
            const isUserPremium = userData.data.memberShipName.toLowerCase() === 'premium';
            setIsPremium(isUserPremium);
        }
    }, [userData?.data?.memberShipName]);

    // Show loading state instead of blank screen
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-green border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // If we don't have user data yet but have premium status from token, we can still render
    const shouldRender = isPremium !== null || userData?.data;
    if (!shouldRender) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-green border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="font-Medium min-h-[100vh] text-black mx-auto">
            <NotificationsHub />
            <Nav linkLogo={isPremium ? ROUTES.PREMIUM.HOMEPAGE : ROUTES.USER.HOMEPAGE} />
            {isPremium ? <NavLinksPremium /> : <NavLinks />}
            <div className="max-w-[1600px] mx-auto">
                <main className="px-4 xl:px-[60px] min-h-[calc(100vh-130px)] md:min-h-[calc(100vh-150px)] mt-3 lg:mt-0">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;