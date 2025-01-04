"use client";

import React from 'react';
import combostyles from "../../Styles/CheckStyle.module.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
function CheckStylesection() {
  return (
    <div>
      <div style={{margin:'0px 10px'}}>
      <p className={combostyles["check-style-text"]}>Check Style</p>
      <p className={combostyles["see-all-text"]}>See All</p>
      </div>

    <div className={combostyles["container"]}>
      {/* Left Image with Formal Dress */}
      <div className={combostyles["image-container"]}>
        <img
        src="/images/shoes.png"
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>Green Formal</p>
      </div>

      {/* Right Image with Men Combo, More, and Plus */}
      <div className={combostyles["image-container"]}>
        <img
          src="/images/shoes.png"
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>Green Formal</p>

       </div>
       <div className={combostyles["image-container"]}>
        <img
          src="/images/shoes.png"
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>Green Formal</p>

       </div>
       <div className={combostyles["image-container"]}>
        <img
          src="/images/shoes.png"
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>Green Formal</p>

       </div>
       <div className={combostyles["image-container"]}>
        <img
          src="/images/shoes.png"
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>Green Formal</p>

       </div>
       <div className={combostyles["image-container"]}>
        <img
          src="/images/shoes.png"
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>Green Formal</p>

       </div>
       <div className={combostyles["image-container"]}>
        <img
          src="/images/shoes.png"
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>Green Formal</p>

       </div>
       <div className={combostyles["image-container"]}>
        <img
          src="/images/shoes.png"
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>Green Formal</p>

       </div>
       <div className={combostyles["image-container"]}>
        <img
          src="/images/shoes.png"
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>Green Formal</p>

       </div>
       </div>

    </div>
  );
}

export default CheckStylesection;
