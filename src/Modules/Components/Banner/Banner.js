import React from "react";
import Image from "next/image";
import BannerStyles from "../../Styles/Banner.module.css";
import BannerCard from "./Components/BannerCard";
import {BANNER_HEADING,BANNER_SUBHEADING,HEADER,} from "../Constants/BannerConstants";
import DesktopNavBar from "./Components/DesktopNavBar";

const Banner = ({ Banner }) => {
  return (
    <div className={BannerStyles["Banner-wrapper"]}>
      <div className={BannerStyles["middle-image"]}>
        <Image
          src="/images/Bannerimage.png"
          width={640}
          height={700}
          alt="banner"
          style={{ marginRight: "80px" }}
        />
      </div>
      <div>
        <BannerCard text={HEADER} image={"/image/Comboimage.png"} prize={870} />
      </div>
      <div className={BannerStyles["middle-wrapper"]}>
        <h1 className={BannerStyles["middle-text"]}>NEW COLLECTION</h1>
      </div>
      <div className={BannerStyles["banner-text-wrapper"]}>
        <p className={BannerStyles["banner-heading-text"]}>{BANNER_HEADING}</p>
        <p className={BannerStyles["banner-subheading-text"]}>
          {BANNER_SUBHEADING}
        </p>
      </div>
    </div>
  );
};
export default Banner;
