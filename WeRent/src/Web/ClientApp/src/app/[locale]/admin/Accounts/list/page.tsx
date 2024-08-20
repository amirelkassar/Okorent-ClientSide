'use client'
import Button from "@/src/components/button";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
    const router = useRouter()
  return <Button onClick={()=>{router.back()}} className={'mx-auto my-10 px-10'}>back</Button>;
}

export default Page;
