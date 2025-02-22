"use client";
import { Toast } from "@/src/components/toast";
import {
  useCancelAds,
  useDeleteAds,
  usePauseAds,
  useResumeAds,
} from "@/src/hooks/queries/user/ads";
import { useCallback } from "react";

function UseChangeStatus(id: any) {
  const { mutateAsync: CancelAds } = useCancelAds(id);
  const { mutateAsync: ResumeAds } = useResumeAds(id);
  const { mutateAsync: PauseAds } = usePauseAds(id);
  const { mutateAsync: DeleteAds } = useDeleteAds(id);

  //Cancel Ads
  const onSubmitCancel = useCallback(
    async (data: any) => {
      Toast.Promise(CancelAds(data), {
        success: "Cancel Ads Done",
        onSuccess: async (res) => {},
      });
    },
    [CancelAds]
  );

  //Resume Ads
  const onSubmitResume = useCallback(
    async (data: any) => {
      Toast.Promise(ResumeAds(data), {
        success: "Resume Ads Done",
        onSuccess: async (res) => {},
      });
    },
    [ResumeAds]
  );

  //Pause Ads
  const onSubmitPause = useCallback(
    async (data: any) => {
      Toast.Promise(PauseAds(data), {
        success: "Pause Ads Done",
        onSuccess: async (res) => {},
      });
    },
    [PauseAds]
  );

  //Delete Ads
  const onSubmitDelete = useCallback(
    async (data: any) => {
      Toast.Promise(DeleteAds(data), {
        success: "Delete Ads Done",
        onSuccess: async (res) => {},
      });
    },
    [DeleteAds]
  );

  return {
    onSubmitCancel,
    onSubmitResume,
    onSubmitPause,
    onSubmitDelete,
  };
}

export default UseChangeStatus;
