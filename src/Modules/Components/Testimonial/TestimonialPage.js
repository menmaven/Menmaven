"use client";

import React from "react";
import { ratings } from "../Constants/Constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./components/NextArrow";
import PrevArrow from "./components/PrevArrow";
import Testimonial from "./Testiomonial";
import styles from '../../Styles/TestimonialSection.module.css'

function TestimonialPage() {
    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // arrows:true,
        nextArrow: <NextArrow styleClass={styles['corporatecard-next-arrow']} image={'https://vmnk.gumlet.io/rightArrow.svg'} />,
        prevArrow: <PrevArrow styleClass={styles['corporatecard-prev-arrow']} image={'https://vmnk.gumlet.io/rightArrow.svg'}/>,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              // infinite: true,
              arrows: false,
              //  arrows: false,
            //   nextArrow: <NextArrow styleClass={styles['corporatecard-next-arrow']} image={'https://vmnk.gumlet.io/rightArrow.svg'} />,
            //   prevArrow: <PrevArrow styleClass={styles['corporatecard-prev-arrow']} image={'https://vmnk.gumlet.io/rightArrow.svg'}/>,
            },
          },
        ],
    
      };

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     nextArrow: <div style={{width:'70px'}}>  <img src="https://vmnk.gumlet.io/rightArrow.svg" /> </div>,
    //     prevArrow:  <div style={{width:'70px'}}>   <img src="https://vmnk.gumlet.io/rightArrow.svg" /> </div>,
    //   };

  return (
    <div> 

<p className={styles["testimonial-heading-text"]}>What Say About Us</p>
<div style={{ position: "relative"}} className={styles["margin"]}>
      <Slider {...settings} style={{ position: "relative",display: "flex", alignItems:"center"}}>
        {ratings?.map((rating, index) => (
          <div key={index} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Testimonial
              username={rating.user}
              address={rating.address}
              reviewtext={rating.text}
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>

  );
}

export default TestimonialPage;
