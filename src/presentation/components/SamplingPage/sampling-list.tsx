import React, { FC } from "react";
import { Button } from "../common/button";
import { PlusOutlined } from "@ant-design/icons";
import { Status } from "./status";
import { Tag } from "./tag";
import { Divider } from "antd";
import { formatCurrency } from "../../utils/helpers";

const SamplingList = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <Button
        text={
          <div className="flex items-center gap-[8px]">
            <div className="text-sm font-medium text-secondary4">
              Tạo sampling
            </div>
            <PlusOutlined className="text-base text-secondary4" />
          </div>
        }
        className="flex items-center justify-center rounded-[8px] border border-secondary4 bg-white py-[8px]"
      />
      <div className="flex flex-col gap-[12px]">
        <SamplingItem status="confirmed" />
        <SamplingItem status="delivering" />
        <SamplingItem status="delivered" />
      </div>
    </div>
  );
};

const SamplingItem: TSamplingItem = ({ status }) => {
  return (
    <div
      className="flex flex-col gap-[8px] rounded-[12px] bg-white px-[12px] py-[10px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center justify-between">
            <Status status={status} />
            <div className="text-sm font-normal text-neutral6">Đơn #1232</div>
          </div>
          <div className="text-base font-medium">
            Thu Hồng <span className="text-gray6">(012343454)</span>
          </div>
        </div>
        <div className="flex gap-[8px]">
          <Tag amount={1} item="Chai nước lavie" />
          <Tag amount={1} item="Chai nước lavie" />
        </div>
      </div>
      <Divider className="m-0 border-gray1" />
      <div className="flex items-center justify-between">
        <div className="text-sm font-normal text-neutral6">Tổng tiền</div>
        <div className="text-base font-medium">{formatCurrency(120000)}</div>
      </div>
    </div>
  );
};

export { SamplingList };

type TSamplingItem = FC<{ status: "confirmed" | "delivering" | "delivered" }>;
