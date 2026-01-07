import React from "react";
import { SamplingList } from "./sampling-list";

const Content = () => {
  return (
    <div className="flex flex-col gap-[16px] p-[16px]">
      <div className="text-lg font-medium">Danh sách sampling</div>
      <SamplingList />
    </div>
  );
};

export default Content;
