import ROUTES from "@/src/routes";
import React from "react";
import imgDone from "@/src/assets/images/done.png";
import Image from "next/image";
import LinkGreen from "@/src/components/linkGreen";
interface DoneProps {
  done: boolean;
}
function DoneAuth({ done }: DoneProps) {
  return (
    <div
      className={` ${
        done ? "block" : "hidden"
      }  fixed inset-0 top-0 left-0 w-full h-full bg-white  z-30 flex items-center justify-center`}
    >
      <div
        className=" w-full h-full "
        style={{
          background: `linear-gradient(180deg, rgba(240,246,251,1) 20%, rgba(240,246,251,1) 20%, rgba(136,186,82,0.3) 50%, rgba(240,246,251,1) 100%)`,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex items-center justify-center flex-col h-full">
          <div className="mb-0 mx-auto   ">
            <Image src={imgDone} alt="imgDone" width={298} height={364} />
          </div>
          <h2 className="text-2xl lg:text-[32px] font-Bold text-center leading-7">
            We are all done!
          </h2>
          <p className="text-grayMedium font-Light">
            {" "}
            Ready to rent and lease some cool items?
          </p>
          <LinkGreen href={ROUTES.AUTH.LOGIN} className="px-10 w-fit mt-8">
            Let’s Go
          </LinkGreen>
        </div>
      </div>
    </div>
  );
}

export default DoneAuth;
