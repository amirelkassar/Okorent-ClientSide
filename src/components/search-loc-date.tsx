"use client";
import React, { useState } from "react";
import { useQueryState } from "nuqs";
import SearchIcon from "@/src/assets/icons/search";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/src/navigation";
import SearchItem from "@/src/components/searchItem";
import SelectLocation from "@/src/components/selectLocation";
import SelectDate from "@/src/components/selectDate";

function SearchLocDate({ guest = false }: { guest?: boolean }) {
  const searchparams = useSearchParams();
  const router = useRouter();
  const [Filter, setFilter] = useQueryState("filter", { throttleMs: 2000 });
  const [AvailableFromAndToParams, setAvailableFromAndToParams] = useState({
    AvailableFrom: searchparams.get("AvailableFrom") || "",
    AvailableTo: searchparams.get("AvailableTo") || "",
  });

  console.log({ Filter, AvailableFromAndToParams });

  const generateUrl = () => {
    const currentCategory = searchparams.get("category") || "Products";

    // Merge existing searchparams with new parameters, overwriting existing ones
    const queryObject: Record<string, string> = Object.fromEntries(
      Object.entries({
        ...Object.fromEntries(searchparams.entries()), // Extract current search params
        category: currentCategory, // Ensure 'category' is included only once
        filter: Filter || "", // Add or update filter
        AvailableFrom: AvailableFromAndToParams.AvailableFrom || "", // Add or update AvailableFrom
        AvailableTo: AvailableFromAndToParams.AvailableTo || "", // Add or update AvailableTo
      }).filter(([_, value]) => value) // Filter out null or undefined values
    );

    // Convert the query object to a valid query string
    const queryString = new URLSearchParams(queryObject).toString();

    // Return the complete URL
    return `${
      guest ? ROUTES.GUEST.PRODUCTSPATH : ROUTES.USER.CATEGORIESPATH
    }?${queryString}`;
  };

  return (
    <>
      <SearchItem
        setFilter={setFilter}
        onClickInput={() => router.push(generateUrl())}
      >
        <LinkGreen
          href={generateUrl()}
          className="h-full w-12 mdl:w-[78px] rounded-e-xl border-[3px] bg-green border-[#a9c788] hover:border-green duration-500 flex items-center justify-center"
        >
          <SearchIcon className={" w-4 mdl:w-[26px] h-auto"} />
        </LinkGreen>
      </SearchItem>

      <div className="flex flex-wrap flex-col md:flex-row md:items-center md:justify-center lg:justify-start gap-2 lg:gap-5 mt-5 mdl:mt-7 mb-6 lg:mb-10">
        <SelectLocation />
        <SelectDate setAvailableFromAndToParams={setAvailableFromAndToParams} />
      </div>
    </>
  );
}

export default SearchLocDate;
