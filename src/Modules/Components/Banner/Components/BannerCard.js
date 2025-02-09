import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import BannerStyles from "../../../Styles/Banner.module.css";
import Image from "next/image";

function BannerCard({ image, prize, text }) {
  return (
    <div>
      <div className={BannerStyles["card-wrapper"]}>
        <div className={BannerStyles["card-container"]}>
          <div>
            <Image
              src="/Images/belt.png"
              width={140}
              height={100}
              alt="banner"
            />
          </div>
          <div>
            <div>
              <p>{text}</p>
              <span>
                <MdCurrencyRupee />
                <span>{prize}</span>
              </span>
            </div>
          </div>
        </div>

        <div className={BannerStyles["add-button-container"]}>
          <p className={BannerStyles["add-text"]}>+</p>
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
