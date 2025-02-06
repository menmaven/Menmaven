// "use client";

// import React, { useState, useEffect } from "react";
// import MainContactPage from "../Modules/Components/Contact/MainContactPage";
// import Footer from "../Modules/Components/Footer/Footer";
// import TestimonialPage from "../Modules/Components/Testimonial/TestimonialPage";
// import Banner from "../Modules/Components/Banner/Banner";
// import Combosection from "@/Modules/Components/ComboSection/Combosection";
// import CheckStylesection from "@/Modules/Components/CheckShoes/CheckStylesection";
// import Navbar from "@/Modules/Components/Navbar/Navbar";
// import Slider from "react-slick";
// import DesktopNavBar from "@/Modules/Components/Banner/Components/DesktopNavBar";
// import BannerStyles from "../Modules/Styles/Banner.module.css";

// export default function () {
//   const [width, setWidth] = useState(0);
//   const [isFixed, setIsFixed] = useState(false); // State to track if the header is fixed

//   // Update the screen width on resize
//   useEffect(() => {
//     const updateWidth = () => setWidth(window.innerWidth);
//     updateWidth(); // Initial check
//     window.addEventListener("resize", updateWidth);

//     // Scroll event to handle the header fixed position
//     const handleScroll = () => {
//       if (window.scrollY > 100) { // Adjust 100 to the scroll point you prefer
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listeners
//     return () => {
//       window.removeEventListener("resize", updateWidth);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//     speed: 2000,
//   };

//   return (
//     <div style={{ backgroundColor: "#FAF7F0" }}>
//       {/* Header Section with dynamic class based on scroll position */}
//       <div
//         className={`${BannerStyles["fixed-header-wrapper"]} ${isFixed ? BannerStyles["fixed"] : ""}`}
//       >
//         <h2 className={BannerStyles["Heaer-text"]}>
//           MEN<span style={{ color: "black", marginLeft: "4px" }}>MAVEN</span>
//         </h2>
//         <DesktopNavBar />
//       </div>

//       {/* Carousel Banner */}
//       <Slider {...settings}>
//         <Banner width={width} />
//         <Banner width={width} />
//         <Banner width={width} />
//         <Banner width={width} />
//         <Banner width={width} />
//       </Slider>

//       <Combosection />
//       <CheckStylesection />
//       <Combosection />
//       <TestimonialPage />
//       <MainContactPage />
//       <Footer />

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           marginTop: "40px",
//         }}
//       >
//         <p
//           style={{
//             fontSize: "24px",
//             color: "black",
//             fontWeight: "400",
//             textAlign: "center",
//           }}
//         >
//           Copyright © 2024 MenMaven
//         </p>
//         <p
//           style={{
//             fontSize: "24px",
//             color: "black",
//             fontWeight: "400",
//             textAlign: "center",
//           }}
//         >
//           All Right Reserved
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import MainContactPage from "../Modules/Components/Contact/MainContactPage";
import Footer from "../Modules/Components/Footer/Footer";
import TestimonialPage from "../Modules/Components/Testimonial/TestimonialPage";
import Banner from "../Modules/Components/Banner/Banner";
import Combosection from "@/Modules/Components/ComboSection/Combosection";
import CheckStylesection from "@/Modules/Components/CheckShoes/CheckStylesection";
import Navbar from "@/Modules/Components/Navbar/Navbar";
import Slider from "react-slick";
import DesktopNavBar from "@/Modules/Components/Banner/Components/DesktopNavBar";
import BannerStyles from "../Modules/Styles/Banner.module.css";
import MobileBanner from "@/Modules/Components/Banner/MobileBanner";

export default function () {
  const [width, setWidth] = useState(0);
  const [isFixed, setIsFixed] = useState(false); // State to track if the header is fixed
  const [lastScrollY, setLastScrollY] = useState(0); // State to track the last scroll position
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // State to control header visibility

  // Update the screen width on resize
  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth(); // Initial check
    window.addEventListener("resize", updateWidth);

    // Scroll event to handle the header fixed position and visibility
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user is scrolling down or up
      if (currentScrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      // Check if the user is scrolling up or down
      if (currentScrollY > lastScrollY) {
        // Scrolling down, hide the header
        setIsHeaderVisible(false);
      } else {
        // Scrolling up, show the header
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
    <div style={{ backgroundColor: "#FAF7F0" }}>
      {/* Header Section with dynamic visibility */}
{width < 768 ?
<>
<Navbar />
     <MobileBanner />

</> :
      <>
            <div
        className={`${BannerStyles["fixed-header-wrapper"]} ${
          isFixed ? BannerStyles["fixed"] : ""
        } ${isHeaderVisible ? "" : BannerStyles["hidden-header"]}`}
      >
        <h2 className={BannerStyles["Heaer-text"]}>
          MEN<span style={{ color: "black", marginLeft: "4px" }}>MAVEN</span>
        </h2>
        <DesktopNavBar />
      </div>

      {/* Carousel Banner */}
      <Slider {...settings}>
        <Banner width={width} />
        <Banner width={width} />
        <Banner width={width} />
        <Banner width={width} />
        <Banner width={width} />
      </Slider>
      </>
}

      <Combosection width= {width}/>
      <CheckStylesection />
      <Combosection />
      <TestimonialPage />
      <MainContactPage width={width} />
      <Footer />
    </div>
  );
}
