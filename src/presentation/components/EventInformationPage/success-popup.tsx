import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { Button } from "../common/button";
import CloseIcon from "../icons/CloseIcon";
import CheckoutImg from "../../static/icons/checkout.svg";
import QRcode from "../../static/images/qrcode.png";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const SuccessPopup: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {children({ open: () => setIsModalOpen(true) })}
      {createPortal(
        <Modal
          visible={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          modalStyle={{
            overflow: "visible",
            paddingTop: "28px",
            position: "relative",
            width: "294px",
            borderRadius: "24px",
          }}
        >
          <>
            <img
              src={CheckoutImg}
              alt=""
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[100px]"
            />
            <div className="flex flex-col items-center gap-[19px] px-[37px] pb-[37px] pt-[10px]">
              <div className="text-lg font-semibold">Đặt hàng thành công</div>
              <div className="size-[214px] rounded-[12px] border border-[#E8E8E8] p-[12px]">
                <img src={QRcode} alt="" className="size-full" />
              </div>
              <div className="rounded-[8px] bg-alert1 p-[8px] text-center text-xs font-normal text-alert4">
                *Vui Lòng Lưu Hoặc Đưa Mã QR đến quầy xác nhận
              </div>
              <div className="flex w-full flex-col gap-[12px]">
                <Button
                  text={
                    <span className="text-sm font-medium text-white">
                      Chi tiết đơn hàng
                    </span>
                  }
                  className="flex h-[33px] flex-none items-center justify-center rounded-[40px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
                  }}
                  onClick={() => navigate("/order-details")}
                />
                <Button
                  text={
                    <span className="text-sm font-medium text-secondary4">
                      Về trang chủ
                    </span>
                  }
                  className="flex h-[33px] flex-none items-center justify-center rounded-[40px] bg-secondary1"
                />
                <Button />
              </div>
            </div>
          </>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { SuccessPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
