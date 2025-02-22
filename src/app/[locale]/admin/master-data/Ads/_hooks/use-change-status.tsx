"use client";
import { useSelectRowTable } from "@/src/components/select-row-table-context";
import { Toast } from "@/src/components/toast";
import {
  usePauseAdsStatusInAdmin,
  usePauseManyAdsStatusInAdmin,
  useResumeAdsStatusInAdmin,
  useResumeManyAdsStatusInAdmin,
} from "@/src/hooks/queries/admin/master-data/ads";

import React, { useCallback } from "react";

function UseChangeStatus(id: any) {
  const { mutateAsync: PauseAdsStatus } = usePauseAdsStatusInAdmin(id);
  const { mutateAsync: ResumeAdsStatus } = useResumeAdsStatusInAdmin(id);
  const { mutateAsync: PauseManyAdsStatus } = usePauseManyAdsStatusInAdmin();
  const { mutateAsync: ResumeManyAdsStatus } = useResumeManyAdsStatusInAdmin();
  const { setSelectRowTable } = useSelectRowTable();

  //Suspend Ads
  const onSubmitSuspend = useCallback(
    async (data: any) => {
      Toast.Promise(PauseAdsStatus(data), {
        success: "Suspend Ads Done",
        onSuccess: async (res) => {},
      });
    },
    [PauseAdsStatus]
  );
  //Suspend Many Ads
  const onSubmitSuspendManyAds = useCallback(
    async (data: any) => {
      Toast.Promise(PauseManyAdsStatus(data), {
        success: "Suspend Ads Done",
        onSuccess: async (res) => {
          setSelectRowTable([]);
        },
      });
    },
    [PauseManyAdsStatus]
  );
  //Resume Ads
  const onSubmitResume = useCallback(
    async (data: any) => {
      Toast.Promise(ResumeAdsStatus(data), {
        success: "Resume Ads Done",
        onSuccess: async (res) => {},
      });
    },
    [ResumeAdsStatus]
  );
  //Resume Many Ads
  const onSubmitResumeManyAds = useCallback(
    async (data: any) => {
      Toast.Promise(ResumeManyAdsStatus(data), {
        success: "Resume Ads Done",
        onSuccess: async (res) => {
          setSelectRowTable([]);
        },
      });
    },
    [ResumeManyAdsStatus]
  );
  return {
    onSubmitSuspend,
    onSubmitResume,
    onSubmitResumeManyAds,
    onSubmitSuspendManyAds,
  };
}

export default UseChangeStatus;
