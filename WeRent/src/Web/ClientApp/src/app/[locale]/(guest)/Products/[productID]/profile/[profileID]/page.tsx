import Image from "next/image";
import React from "react";
import EmpoweringImg from "@/src/assets/images/Empowering.png";
import { Rentals } from "@/src/lib/dataUser";
import ProductList from "@/src/components/product/productList";
import ViewProfile from "@/src/components/viewProfile";

function page() {
  return (
    <div>
      <div className="w-full rounded-3xl overflow-hidden h-[180px] lg:h-[356px]">
        <Image
          src={EmpoweringImg}
          alt="Empowering"
          className="w-full h-full"
          width={1471.48}
          height={356.18}
        />
      </div>
      <ViewProfile/>
      <div className="mt-10 lg:my-20 mx-auto">
        <ProductList more={false} title="Mark Rentals" data={Rentals} />
      </div>
    </div>
  );
}

export default page;
