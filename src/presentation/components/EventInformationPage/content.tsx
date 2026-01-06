import React, { useState } from "react";
import { Banner } from "./banner";
import { Title } from "./title";
import { Divider } from "antd";
import { Rewards } from "./rewards";
import { Description } from "./description";
import { FloatButton } from "./float-button";
import { Survey } from "./survey";

const Content = () => {
  const [state, setState] = useState<TEventState>("unsubscribed");

  return (
    <div className="flex size-full flex-col">
      <Banner />
      <div className="flex-1 py-[50px]">
        {!(state === "subscribing") ? (
          <div className="flex flex-col gap-[20px]">
            <Title currentState={state} />
            <Divider className="m-0 border-[3px] border-[#ECF7FA]" />
            <Rewards />
            {state === "unsubscribed" && <Description />}
          </div>
        ) : (
          <Survey />
        )}
      </div>
      <FloatButton currentState={state} setCurrentState={setState} />
    </div>
  );
};

export default Content;

export type TEventState =
  | "unsubscribed"
  | "subscribing"
  | "subscribed"
  | "completed";
