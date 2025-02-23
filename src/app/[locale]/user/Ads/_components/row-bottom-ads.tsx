import React from "react";
import BottomCardAds from "./bottom-card-ads";
import UseChangeStatus from "../_hooks/use-change-status";
import { useRouter } from "@/src/navigation";

function RowBottomAds({
  id,
  Status,
  detailsPage = false,
}: {
  id: string;
  Status: number | string;
  detailsPage?: boolean;
}) {
  const STYLE_DETAILS = "px-4 mdl:!px-6 !min-h-11 !flex-none";
  const Router = useRouter();
  const { onSubmitCancel, onSubmitPause, onSubmitResume, onSubmitDelete } =
    UseChangeStatus(id || "");
  const BackRoute = () => {
    if (detailsPage) {
      Router.back();
    }
  };
  return (
    <div className={`flex items-center gap-4 ${detailsPage && "flex-wrap"}`}>
      {Status === 1 && (
        <>
          <BottomCardAds.StopAds
            onClick={() => onSubmitPause({ advertisementId: id })}
            style={detailsPage ? STYLE_DETAILS : ""}
          />
          <BottomCardAds.CancelAds
            onClick={() => {
              onSubmitCancel({ advertisementId: id });
            }}
            style={detailsPage ? STYLE_DETAILS : ""}
          />
          {detailsPage && (
            <BottomCardAds.DeleteAds
              onClick={() => onSubmitDelete({ advertisementId: id }, BackRoute)}
              style={detailsPage ? STYLE_DETAILS : ""}
            />
          )}
        </>
      )}
      {Status === 2 && (
        <>
          <BottomCardAds.CancelAds
            onClick={() => {
              onSubmitCancel({ advertisementId: id });
            }}
            style={detailsPage ? STYLE_DETAILS : ""}
          />
          <BottomCardAds.DeleteAds
            onClick={() => onSubmitDelete({ advertisementId: id }, BackRoute)}
            style={detailsPage ? STYLE_DETAILS : ""}
          />
        </>
      )}
      {Status === 3 && (
        <>
          <BottomCardAds.ResumeAds
            onClick={() => onSubmitResume({ advertisementId: id })}
            style={detailsPage ? STYLE_DETAILS : ""}
          />
          <BottomCardAds.CancelAds
            onClick={() => {
              onSubmitCancel({ advertisementId: id });
            }}
            style={detailsPage ? STYLE_DETAILS : ""}
          />
          {detailsPage && (
            <BottomCardAds.DeleteAds
              onClick={() => onSubmitDelete({ advertisementId: id }, BackRoute)}
              style={detailsPage ? STYLE_DETAILS : ""}
            />
          )}
        </>
      )}
      {Status === 4 && (
        <>
          <BottomCardAds.DeleteAds
            onClick={() => onSubmitDelete({ advertisementId: id }, BackRoute)}
            style={detailsPage ? STYLE_DETAILS : ""}
          />
        </>
      )}
      {Status === 5 && (
        <>
          <BottomCardAds.DeleteAds
            onClick={() => onSubmitDelete({ advertisementId: id }, BackRoute)}
            style={detailsPage ? STYLE_DETAILS : ""}
          />
        </>
      )}
    </div>
  );
}

export default RowBottomAds;
