'use client';

import React, { useState, useEffect } from "react";
import { GetUserInfo } from '@/src/hooks/queries/user/home/user-info';
import OfferSlider from "./_components/offerSlider";
import Categories from "./_components/categories";
import CategoriesPremium from "../premium/_components/categories"
import HeaderAdmin from "./_components/headerAdmin";
import HeaderPremium from "@/src/app/[locale]/premium/_components/header-premium";
import ProductHome from "./_components/product-home";
import { useToken } from "@/src/hooks/use-token";
import { authDecodedToken } from "@/token";

function Page() {
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

    if (isLoading || !userData?.data) {
        return null;
    }

    return (
        <div>
            {userData.data.memberShipName?.toLowerCase() === 'premium' ?
                <>
                    <HeaderPremium/>
                    <CategoriesPremium/>
                </> :
                <>
                    <HeaderAdmin/>
                    <Categories/>
                </>
            }
            <OfferSlider />
            <ProductHome />
        </div>
    );
}

export default Page;