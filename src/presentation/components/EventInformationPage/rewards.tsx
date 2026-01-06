import React from "react";
import GiftIcon from "../../static/icons/gift.png";
import RewardImg from "../../static/images/reward.png";
import { Divider } from "antd";

const Rewards = () => {
  return (
    <div className="flex flex-col gap-[14px] px-[16px] py-[14px]">
      <div className="flex items-center gap-[4px]">
        <img src={GiftIcon} alt="" className="size-[16px]" />
        <div className="text-sm font-normal">Quà tặng có thể nhận</div>
      </div>
      <div className="flex flex-col gap-[14px]">
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            <Reward />
            {index < 1 && <Divider dashed className="m-0" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Reward = () => {
  return (
    <div className="flex items-center gap-[8px]">
      <img src={RewardImg} alt="" className="h-[37px] object-contain" />
      <div className="text-xs font-medium text-neutral8">
        1x Gối kê cổ cam đáng yêu
      </div>
    </div>
  );
};

export { Rewards };
