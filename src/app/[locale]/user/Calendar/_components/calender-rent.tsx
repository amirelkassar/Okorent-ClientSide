import { GetMyOrderAll } from "@/src/hooks/queries/user/booking";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import CalenderComp from "./calender-comp";
import Loading from "@/src/components/loading";

function CalenderRent({ currentView }: { currentView: string }) {
  const searchParams = useSearchParams();
  const { data: OrdersIRent, isLoading } = GetMyOrderAll(
    `DateForCalender=${searchParams.get("DateForCalender")}`
  );
  const ResourceDate = useMemo(() => {
    if (!OrdersIRent?.data) return [];
    return OrdersIRent.data.items.map((item: any) => ({
      id: item.id,
      title: item?.productName,
      productType: item.productName,
      img: item.heroImage,
      code: item.id?.slice(0, 5),
    }));
  }, [OrdersIRent]);

  // 🏷️ استخدام useMemo لحساب البيانات فقط عند تغيير OrdersIRent
  const EventData = useMemo(() => {
    if (!OrdersIRent?.data) return [];
    return OrdersIRent.data.items.map((item: any) => ({
      id: item.id,
      title: item?.renterName || item.lessorName,
      start: item.from?.split("T")[0],
      end: new Date(new Date(item.to).setDate(new Date(item.to).getDate() + 1))
        ?.toISOString()
        ?.split("T")[0],
      groupId: item.id,
      resourceId: item.id,
      interactive: false,
      display: "background",
      color: "transparent",
      sourceId: item.id,
      extendedProps: {
        status: item.status,
        image: item.userImage,
        productName: item.productName,
        payment: `$${item.amount}`,
        from: item.from?.split("T")[0],
        to: item.to?.split("T")[0],
      },
    }));
  }, [OrdersIRent]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <CalenderComp
      EventData={EventData}
      ResourceDate={ResourceDate}
      currentView={currentView}
    />
  );
}

export default CalenderRent;
