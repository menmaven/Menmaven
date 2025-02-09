import React from "react";
import Image from "next/image";
import BannerStyles from "../../Styles/Banner.module.css";
import BannerCard from "./Components/BannerCard";
import {
  BANNER_HEADING,
  BANNER_SUBHEADING,
  HEADER,
} from "../Constants/BannerConstants";
import DesktopNavBar from "./Components/DesktopNavBar";

const MobileBanner = ({ Banner }) => {
  return (
    <div
      className={BannerStyles["Banner-wrapper"]}
    >
      <div className={BannerStyles["middle-text-container"]}>
        <p className={BannerStyles["all-collection-text"]}>ALL COLLECTION</p>
      </div>
      <div className={BannerStyles["middle-image"]}>
        <Image
          src="/images/Bannerimage.png"
          width={340}
          height={400}
          alt="banner"
          style={{ marginRight: "50px" }}
        />
      </div>
    </div>
  );
};
export default MobileBanner;
