"use client";

import React from 'react';
import combostyles from "../../Styles/Combosection.module.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Combosection({width}) {
  return (
    <div className={combostyles["container"]}>
      {width < 768 &&
      <div style={{display:'flex',justifyContent:'center',flexDirection:'row'}}>
      <span className={combostyles["heading-text"]} >OUR COLLECTION YOUR LEGACY</span>
      </div>
      }
      <div className={combostyles["image-container"]}>
        {/* <img
        src="/images/comboimageone.jpg"
          alt="Background"
          className={combostyles["image"]}
        /> */}
        <div className={combostyles["formal-dress-text"]}>Formal Dress</div>
      </div>

      <div className={combostyles["image-container"]}>
        {/* <img
          src="/images/comboimagetwo.jpg"
          alt="Background"
          className={combostyles["image"]}
        /> */}
        <div className={combostyles["men-combo-container"]}>
          <div className={combostyles["men-combo-text"]}>Men Combo</div>
          <div className={combostyles["more-plus-container"]}>
            <span className={combostyles["men-combo-text"]}>More</span>
            <IoIosArrowDroprightCircle color="black" size={35}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Combosection;
