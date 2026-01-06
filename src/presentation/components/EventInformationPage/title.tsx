import React, { FC } from "react";
import ClockIcon from "../icons/ClockIcon";
import { TEventState } from "./content";

const Title: TTitle = ({ currentState }) => {
  function TagRender() {
    switch (currentState) {
      case "subscribing":
        return (
          <div className="flex items-center justify-center rounded-[24px] bg-alert1 px-[8px] py-[4px]">
            <div className="text-xs font-medium text-alert4">Chờ xác nhận</div>
          </div>
        );
      case "subscribed":
        return (
          <div className="flex items-center justify-center rounded-[24px] bg-infor1 px-[8px] py-[4px]">
            <div className="text-xs font-medium text-infor3">Đã đăng ký</div>
          </div>
        );
      case "completed":
        return (
          <div className="flex items-center justify-center rounded-[24px] bg-success1 px-[8px] py-[4px]">
            <div className="text-xs font-medium text-success4">
              Đã hoàn thành
            </div>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col items-center gap-[12px] px-[16px]">
      <div className="text-xl font-medium">Món quà vô giá từ thiên nhiên</div>
      <div className="flex gap-[8px]">
        <div className="flex w-fit items-center gap-[4px] rounded-[24px] border border-alert3 bg-alert1 px-[8px] py-[6px]">
          <ClockIcon className="size-[16px] text-alert4" />
          <div className="text-xs font-semibold text-alert4">
            01/11/2025 - 11/11/2025
          </div>
        </div>
        {TagRender()}
      </div>
    </div>
  );
};

export { Title };

type TTitle = FC<{ currentState: TEventState }>;
