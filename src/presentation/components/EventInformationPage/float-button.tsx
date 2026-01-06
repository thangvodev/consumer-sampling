import React, { FC } from "react";
import { Button } from "../common/button";
import { TEventState } from "./content";
import { SuccessPopup } from "./success-popup";

const FloatButton: TFloatButton = ({ currentState, setCurrentState }) => {
  function ButtonRender(openModal?: () => void): React.ReactNode {
    switch (currentState) {
      case "unsubscribed":
        return (
          <Button
            text={
              <div className="text-base font-medium text-white">
                Đăng ký tham gia
              </div>
            }
            className="flex w-full items-center justify-center rounded-[40px] px-[48px] py-[12px]"
            style={{
              background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
            }}
            onClick={() => setCurrentState("subscribing")}
          />
        );
      case "subscribing":
        return (
          <Button
            text={
              <div className="text-base font-medium text-white">Xác nhận</div>
            }
            className="flex w-full items-center justify-center rounded-[40px] px-[48px] py-[12px]"
            style={{
              background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
            }}
            onClick={() => {
              setCurrentState("subscribed");
              openModal?.();
            }}
          />
        );
      case "subscribed":
        return (
          <Button
            text={
              <div className="text-base font-medium text-secondary4">
                Về trang chủ
              </div>
            }
            className="flex w-full items-center justify-center rounded-[40px] bg-secondary1 px-[48px] py-[12px]"
            onClick={() => setCurrentState("completed")}
          />
        );
      case "completed":
        return (
          <Button
            text={
              <div className="text-base font-medium text-secondary4">
                Về trang chủ
              </div>
            }
            className="flex w-full items-center justify-center rounded-[40px] bg-secondary1 px-[48px] py-[12px]"
          />
        );
    }
  }

  return (
    <div
      className="sticky inset-x-0 bottom-0 bg-white px-[16px] pb-[20px] pt-[10px]"
      style={{ boxShadow: "0px -4px 12px 0px #406A5D1F" }}
    >
      <SuccessPopup>{({ open }) => <>{ButtonRender(open)}</>}</SuccessPopup>
    </div>
  );
};

export { FloatButton };

type TFloatButton = FC<{
  currentState: TEventState;
  setCurrentState: React.Dispatch<React.SetStateAction<TEventState>>;
}>;
