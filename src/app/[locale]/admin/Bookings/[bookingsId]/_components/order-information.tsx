"use client";
import DateIcon from "@/src/assets/icons/date";
import LocationIcon from "@/src/assets/icons/location";
import Button from "@/src/components/button";
import CardInfoOrder from "@/src/components/card-info-order";
import GoogleMapAddress from "@/src/components/GoogleMapAddress";
import ModalComp from "@/src/components/modal-comp";
import { Toast } from "@/src/components/toast";
import { useEditOrderByIDInAdmin } from "@/src/hooks/queries/admin/booking";
import { GetProductsInAdminByID } from "@/src/hooks/queries/admin/lisiting";
import { GetProductsByID } from "@/src/hooks/queries/user/home";
import { getDate } from "@/src/lib/utils";
import { Radio } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import React, { useState } from "react";
const OptionAddresses = [
  {
    value: "store",
    label: "In store",
  },
  {
    value: "delivery",
    label: "Delivery",
  },
  {
    value: "pickup",
    label: "pickup ",
  },
];
function OrderInformation({
  data,
  edit = false,
  setEdit,
}: {
  data: any;
  edit: any;
  setEdit: any;
}) {
  const [valueAddressType, setValueAddressType] = useState("");
  const [location, setLocation] = useState<any>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const { data: productData } = GetProductsInAdminByID(
    data?.getOrderItemDtos[0]?.productId
  );
  console.log(data);

  const { mutateAsync: EditOrderDetails } = useEditOrderByIDInAdmin(data?.id);
  const handelEditOrder = () => {
    const formData = {
      id: data?.id,
      deliveryType:
        valueAddressType === "store"
          ? 1
          : valueAddressType === "delivery"
          ? 2
          : valueAddressType === "pickup"
          ? 3
          : 1,
      ...(valueAddressType === "store" && {
        stockId: location,
      }),
      ...(valueAddressType === "delivery" && {
        renterAddress: location,
      }),
      ...(valueAddressType === "pickup" && {
        pickUpAddress: location,
      }),
    };
    Toast.Promise(EditOrderDetails(formData), {
      success: "successfully Edit Order",
      onSuccess: async (res) => {
        console.log(res);
      },
    });
  };
  return (
    <div className="w-full mdl:min-w-[400px] flex-1 py-6 mdl:py-9 px-3 mdl:px-4 bg-white rounded-xl border border-green/30">
      <div className="flex w-full flex-1 mdl:flex-row flex-col flex-wrap gap-y-5 gap-x-8">
        <CardInfoOrder
          label="Client Name"
          iconRender={() => (
            <div className="bg-blueLight rounded-full size-10 p-0 flex items-center justify-center">
              {data?.renterImage ? (
                <Image
                  src={data.renterImage}
                  alt="user"
                  width={100}
                  height={100}
                  className="w-full h-full rounded-full object-cover object-top"
                />
              ) : (
                data?.renterName?.slice(0, 2)
              )}
            </div>
          )}
        >
          <div>
            <h4>{data?.renterName || "--"}</h4>
            <p className="text-xs text-grayMedium font-Regular">
              {data?.renterEmail || "--"}
            </p>
          </div>
        </CardInfoOrder>
        {edit ? (
          <CardInfoOrder label="Rental Type">
            <div className="flex-1">
              <Radio.Group
                name="OptionAddresses"
                classNames={{
                  label: "text-xl",
                }}
                onChange={(e) => {
                  setValueAddressType(e);
                  if (e === "delivery" || e === "pickup") {
                    open();
                  }
                }}
              >
                <div className="flex my-6 w-full  gap-2">
                  {OptionAddresses.map((option, inedx) => {
                    return (
                      <Radio
                        color="#88BA52"
                        key={inedx}
                        value={option.value}
                        label={option.label}
                        className="flex-1"
                        classNames={{
                          icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                        }}
                      />
                    );
                  })}
                </div>
              </Radio.Group>
            </div>
          </CardInfoOrder>
        ) : (
          <CardInfoOrder
            label="Rental Type"
            info={
              data?.deliveryType === 1
                ? "Stock"
                : data?.deliveryType === 2
                ? "Delivery"
                : data?.deliveryType === 3
                ? "Pickup"
                : "--"
            }
          />
        )}

        <CardInfoOrder
          label="Rental Date"
          info={`${getDate(data?.from).fullMonthNameWithDayName} to ${
            getDate(data?.to).fullMonthNameWithDayName
          }`}
          iconRender={() => <DateIcon className="w-5 h-auto" fill="#0F2A43" />}
        />
        {edit ? (
          <CardInfoOrder label="Delivery Addressee">
            {valueAddressType === "delivery" ||
            valueAddressType === "pickup" ? (
              location ? (
                <button
                  onClick={open}
                  className="px-4 py-3 max-w-full w-full rounded-xl border border-green/30 flex items-center gap-2"
                >
                  <LocationIcon />
                  <p className="text-sm font-Regular text-grayMedium max-w-full truncate">
                    {location?.address || "Add a location"}
                  </p>
                </button>
              ) : null
            ) : valueAddressType === "store" ? (
              <>
                <Radio.Group
                  name="OptionAddressStore"
                  classNames={{
                    label: "text-base",
                  }}
                  onChange={(e) => {
                    setLocation(e.toString());
                  }}
                >
                  <div className="flex  gap-2">
                    {productData?.data?.stocks.map(
                      (option: any, inedx: number) => {
                        return (
                          <Radio
                            color="#88BA52"
                            key={inedx}
                            value={option.id}
                            label={option.name}
                            className="flex-1"
                            classNames={{
                              icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                            }}
                          />
                        );
                      }
                    )}
                  </div>
                </Radio.Group>
              </>
            ) : null}

            <ModalComp title="Add a variation" opened={opened} close={close}>
              <GoogleMapAddress close={close} setLocation={setLocation} />
            </ModalComp>
          </CardInfoOrder>
        ) : (
          <CardInfoOrder
            label="Delivery Adressee"
            info={
              typeof data?.address.address === "string"
                ? data?.address.address || "--"
                : data?.address?.state
            }
          />
        )}
      </div>

      {edit && (
        <Button
          className={"mt-10 mx-auto !px-10"}
          onClick={() => {
            setEdit(false);
            handelEditOrder();
          }}
        >
          Save Edit
        </Button>
      )}
    </div>
  );
}

export default OrderInformation;
