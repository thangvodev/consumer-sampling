import React from "react";
import BannerImg from "../../static/images/lavie.png";
import LogoImg from "../../static/images/lavie-logo.png";

export const Banner = () => {
  return (
    <div className="relative flex flex-col items-center">
      <img src={BannerImg} alt="Banner" className="size-full object-cover" />
      <img
        src={LogoImg}
        alt=""
        className="absolute bottom-0 size-[80px] translate-y-1/2 rounded-[12px] border border-stroke1"
      />
    </div>
  );
};
