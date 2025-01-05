"use client";

import React from 'react';
import combostyles from "../../Styles/CheckStyle.module.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Shoes from '../Constants/Shoes';
import { Link } from 'react-router-dom';
function CheckStylesection() {
  return (
    <div>
      <div style={{margin:'0px 10px'}}>
      <p className={combostyles["check-style-text"]}>Check Style</p>
      <p className={combostyles["see-all-text"]}>See All</p>
      </div>

    <div className={combostyles["container"]}>
      {/* Left Image with Formal Dress */}

{Shoes.map((shoes, index) => (
  <div>
            <Link to={'shoes/' + shoes._id}>

      <div className={combostyles["image-container"]}>
        <img
        src={shoes.img}
          alt="Background"
          className={combostyles["image"]}
        />
      <p className={combostyles["shoes-text"]}>{shoes.name}</p>
      </div>
      </Link>
    </div>
))}
       </div>

    </div>
  );
}

export default CheckStylesection;
