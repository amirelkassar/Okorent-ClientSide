import Card from "@/src/components/card";
import Input from "@/src/components/input";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <Card>
      <Image src={""} alt="" />
      <Input label=" Category Name" placeholder="electronics" />
    </Card>
  );
}

export default page;
