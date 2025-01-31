"use client";

import React from "react";
import combostyles from "../../Styles/CheckStyle.module.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Shoes from "../Constants/Shoes";
import Link from "next/link"; // Use next/link for navigation

function CheckStylesection() {
  return (
    <div>
      <div style={{ margin: "0px 10px" }}>
        <p className={combostyles["check-style-text"]}>Check Style</p>
        <p className={combostyles["see-all-text"]}>See All</p>
      </div>

      <div className={combostyles["container"]}>
        {Shoes.map((shoes, index) => (
          <div key={shoes.id}>
            <Link href={`/shoes/${shoes.id}`}>
              <div className={combostyles["image-container"]}>
                <img
                  src={shoes.img}
                  alt={shoes.name}
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
