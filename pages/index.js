"use client";

import Banner from "@/Modules/Components/Banner/Banner";
import DesktopNavBar from "@/Modules/Components/Banner/Components/DesktopNavBar";
import MobileBanner from "@/Modules/Components/Banner/MobileBanner";
import Combosection from "@/Modules/Components/ComboSection/Combosection";
import Navbar from "@/Modules/Components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import BannerStyles from "../src/Modules/Styles/Banner.module.css"
import CheckStylesection from "@/Modules/Components/CheckShoes/CheckStylesection";
import TestimonialPage from "@/Modules/Components/Testimonial/TestimonialPage";
import MainContactPage from "@/Modules/Components/Contact/MainContactPage";
import { BsPeople } from "react-icons/bs";
import People from "@/Modules/People";


export default function HomePage() {
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
    <div style={{ backgroundColor: "#FAF7F0" }}>
      {/* Header Section */}
      {width < 768 ? (
        <>
          <MobileBanner />
        </>
      ) : (
        <>

          {/* Carousel Banner */}
          <Slider {...settings}>
            <Banner width={width} />
            <Banner width={width} />
            <Banner width={width} />
            <Banner width={width} />
            <Banner width={width} />
          </Slider>
        </>
      )}

      {/* Page Sections */}
      <Combosection />
      <CheckStylesection />
      <Combosection />
      <TestimonialPage />
      <MainContactPage />
      <People />
      {/* <Footer /> */}

      {/* Footer Copyright */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            color: "black",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Copyright © 2024 MenMaven
        </p>
        <p
          style={{
            fontSize: "24px",
            color: "black",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          All Rights Reserved
        </p>
      </div>
    </div>
  );
}
