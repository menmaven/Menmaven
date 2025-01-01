import React from "react";
import Image from "next/image";
import BannerStyles from "../../Styles/Banner.module.css";
import BannerCard from "./Components/BannerCard";
import {BANNER_HEADING,BANNER_SUBHEADING,HEADER,} from "../Constants/BannerConstants";
import DesktopNavBar from "./Components/DesktopNavBar";

const MobileBanner = ({ Banner }) => {
  return (
<div className={BannerStyles["Banner-wrapper"]} style={{ position: 'relative' }}>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      position: 'relative', 
      zIndex: 1, 
    }}
  >
    <p style={{ textAlign: 'center', fontSize:'28px', fontWeight:'600' }}>ALL COLLECTION</p>
  </div>
  <div
    className={BannerStyles["middle-image"]}
    style={{
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      zIndex: 100, 
    }}
  >
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
