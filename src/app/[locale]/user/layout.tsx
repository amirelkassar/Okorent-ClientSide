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

    useEffect(() => {
        if (token) {
            authDecodedToken().then((decoded) => {
                setUserId(decoded?.userID);
            });
        }
    }, [token]);

    const { data: userData, isLoading } = GetUserInfo(userId);

    if (isLoading) {
        return null;
    }

    const isPremium = userData?.data?.memberShipName.toLowerCase() === 'premium';

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