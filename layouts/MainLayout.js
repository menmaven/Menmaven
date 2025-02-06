import React, { useEffect, useState } from "react";
import Footer from "@/Modules/Components/Footer/Footer"; // Adjust path
import "../globals.css"
import Navbar from "@/Modules/Components/Navbar/Navbar";
import MobileBanner from "@/Modules/Components/Banner/MobileBanner";
import DesktopNavBar from "@/Modules/Components/Banner/Components/DesktopNavBar";
import Slider from "react-slick";
import Banner from "@/Modules/Components/Banner/Banner";
import BannerStyles from "../src/Modules/Styles/Banner.module.css"

const MainLayout = ({ children }) => {

    const [width, setWidth] = useState(0);
    const [isFixed, setIsFixed] = useState(false); // State to track if the header is fixed
  
    // Update the screen width on resize
    useEffect(() => {
      const updateWidth = () => setWidth(window.innerWidth);
      updateWidth(); // Initial check
      window.addEventListener("resize", updateWidth);
  
      // Scroll event to handle the header fixed position
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup event listeners
      return () => {
        window.removeEventListener("resize", updateWidth);
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "linear",
        speed: 2000,
      };
    

  return (
    <div>
              {width < 768 ? (
        <>
          <Navbar />
        </>
      ) : (
        <>
          <div
            className={`${BannerStyles["fixed-header-wrapper"]} ${
              isFixed ? BannerStyles["fixed"] : ""
            }`}
          >
            <h2 className={BannerStyles["header-text"]}>
              MEN<span style={{ color: "black", marginLeft: "4px" }}>MAVEN</span>
            </h2>
            <DesktopNavBar />
          </div>
        </>
      )}

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
