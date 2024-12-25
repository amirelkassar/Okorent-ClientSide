import DownIcon from "@/src/assets/icons/down";
import Button from "@/src/components/button";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import React from "react";
import phone from "@/src/assets/images/phone.png";
import { CloseIcon, Modal } from "@mantine/core";
import CardRequest from "@/src/components/cardRequest";
import { RequestsData } from "@/src/lib/dataUser";
const data = [
  {
    id: 1,
    name: "Apple Mobile ",
    Payment: "100",
  },
  {
    id: 2,
    name: "Apple Mobile",
    Payment: "100",
  },
  {
    id: 3,
    name: "Apple Mobile",
    Payment: "100",
  },
  {
    id: 4,
    name: "Apple Mobile",
    Payment: "900",
  },
];
function ProductClient() {
  const [opened, { toggle }] = useDisclosure(false);
  const [openedModal, { open, close }] = useDisclosure(false);
  return (
    <div className=" relative w-full md:w-auto  mx-auto md:mx-0">
      <div className="bg-grayBack h-full w-full lg:w-[430px] rounded-xl min-w-[270px] flex items-center gap-1 md:gap-4 py-3 px-2">
        <Image
          src={phone}
          alt="phone"
          width={21}
          height={43}
          className="w-auto h-full max-h-[44px]"
        />
        <div className="flex-1 flex items-center relative  gap-2 md:gap-4 justify-between flex-wrap pe-9">
          <div className="">
            <h4 className="text-grayMedium min-w-[66px] text-[10px] mdl:text-[12px]">
              Product Name
            </h4>
            <p className="text-[12px] mdl:text-[14px] max-w-[120px] text-nowrap truncate">
              Apple Mobile
            </p>
          </div>
          <span className="w-[1px] h-[36px] block bg-[#B6BFC6]"></span>
          <div className="">
            <h4 className="text-grayMedium  text-center min-w-[66px] text-[10px] mdl:text-[12px]">
              Payment
            </h4>
            <p className=" text-[12px] mdl:text-[14px] text-center">100$</p>
          </div>
          <span className="w-[1px] h-[36px] block bg-[#B6BFC6]"></span>
          <Button
            onClick={open}
            className={
              "h-[34px] w-[90px] text-sm lg:text-base font-Regular px-5 mdl:px-7 "
            }
          >
            View{" "}
          </Button>
          <button
            onClick={toggle}
            className=" absolute top-[50%] end-1 translate-y-[-50%]"
          >
            <DownIcon
              className={`w-4 h-auto duration-200 ${opened && "rotate-180"}`}
            />
          </button>
        </div>
      </div>

      {opened && (
        <div className=" absolute top-[calc(100%+12px)] rounded-xl shadow-lg bg-grayBack flex flex-col gap-3 mdl:gap-5 left-0 w-full h-auto py-5 px-2 mdl:px-1 bg-">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-white h-full rounded-xl min-w-[270px] flex items-center gap-1 md:gap-4 py-3 ps-3"
              >
                <Image
                  src={phone}
                  alt="phone"
                  width={21}
                  height={43}
                  className="w-auto h-full max-h-[44px]"
                />
                <div className="flex-1 flex items-center relative  gap-2 md:gap-4 justify-between pe-[36px]  lg:pe-[40px] ">
                  <div className="">
                    <h4 className="text-grayMedium min-w-[66px] text-[10px] mdl:text-[12px]">
                      Product Name
                    </h4>
                    <p className=" text-[12px] mdl:text-[14px] text-nowrap max-w-[100px] truncate ">
                      Apple Mobile
                    </p>
                  </div>
                  <span className="w-[1px] h-[36px] block bg-[#B6BFC6]"></span>
                  <div className="">
                    <h4 className="text-grayMedium text-center min-w-[66px] text-[10px] mdl:text-[12px]">
                      Payment
                    </h4>
                    <p className=" text-[12px] mdl:text-[14px] text-center">
                      100$
                    </p>
                  </div>
                  <span className="w-[1px] h-[36px] block bg-[#B6BFC6]"></span>
                  <Button
                    onClick={open}
                    className={
                      "h-[34px] w-[90px] text-sm lg:text-base font-Regular px-5 mdl:px-7 "
                    }
                  >
                    View{" "}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Modal
        opened={openedModal}
        onClose={close}
        size="auto"
        classNames={{
          header: "p-0 h-0 min-h-0",
          body: "min-h-[300px] p-0",
          content: "rounded-3xl ",
        }}
        closeButtonProps={{
          icon: <CloseIcon />,
          className: "mb-[-40px] absolute end-4 top-3",
        }}
        centered
      >
        <CardRequest data={RequestsData[0]} />
      </Modal>
    </div>
  );
}

export default ProductClient;
