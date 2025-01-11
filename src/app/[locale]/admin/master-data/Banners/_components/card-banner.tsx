import CardPhone from "@/src/components/card-phone";
import RowCardPhone from "@/src/components/row-card-phone";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import Image from "next/image";
import React from "react";
import RenderStatus from "./render-status";
import Button from "@/src/components/button";
import EditIcon from "@/src/assets/icons/edit";
import PasswordIconHide from "@/src/assets/icons/password";
import LinkGreen from "@/src/components/linkGreen";
import PasswordIconShow from "@/src/assets/icons/PasswordIconShow";

function CardBanner({ dataCard }: any) {
  return (
    <CardPhone>
      <Link
        href={ROUTES.ADMIN.LISTINGSDETAILS(dataCard.id)}
        className="flex items-center gap-2"
      >
        <Image
          src={dataCard.bannerImage}
          alt={"bannerImage"}
          width={300}
          height={80}
          className="w-full h-16 rounded-xl  object-cover "
        />
      </Link>
      <div className="mt-2 flex flex-col gap-3">
        <RowCardPhone title="Title" info={dataCard.title} />
        <RowCardPhone
          title="Link"
          cell={() => (
            <Link
              href={dataCard.link || "#"}
              className="font-SemiBold text-sm md:text-[16px] truncate underline text-blue"
            >
              {dataCard.link}
            </Link>
          )}
        />

        <RowCardPhone
          title="Status"
          cell={() => <RenderStatus status={dataCard.status} />}
        />
        <div className="flex items-center gap-3 justify-center mt-1">
          <LinkGreen
            href={"#"}
            className={
              "text-blue gap-2 hover:shadow-md flex-1 max-w-[200px] border-none bg-blueLight h-10"
            }
          >
            <EditIcon fill="#006AFF" className="w-3 h-auto" />
            Edit
          </LinkGreen>
          {dataCard.status === "Visible" ? (
            <Button className={" gap-2 flex-1 max-w-[200px]  h-10"}>
              <PasswordIconHide fill="white" className="w-4 h-auto" />
              Hide
            </Button>
          ) : (
            <Button className={" gap-2 flex-1 max-w-[200px]  h-10"}>
              <PasswordIconShow fill="white" className="w-4 h-auto" />
              Make Visible
            </Button>
          )}
        </div>
      </div>
    </CardPhone>
  );
}

export default CardBanner;
