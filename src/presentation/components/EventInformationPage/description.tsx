import React from "react";
import InformationIcon from "../icons/InformationIcon";

export const Description = () => {
  return (
    <div className="flex flex-col gap-[8px] px-[16px]">
      <div className="flex items-center gap-[8px]">
        <InformationIcon className="size-[20px] text-neutral6" />
        <div className="text-sm font-normal">Mô tả</div>
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="text-sm font-normal">
          Bước 1: Đăng ký tham gia sự kiện
        </div>
        <div className="text-sm font-normal">
          Bước 2: Xác nhận nhận quà tặng
        </div>
        <div className="text-sm font-normal">Bước 3: Follow OA</div>
      </div>
    </div>
  );
};
