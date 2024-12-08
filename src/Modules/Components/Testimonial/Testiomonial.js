"use client";

import React, { useState } from "react";
import { FAKE_REVIEW_TEXT } from "../Constants/Constants";
import ReactStars from "react-stars";
import styles from "../../Styles/TestimonialSection.module.css";

function Testimonial({
  reviewtext,
  username,
  address,
}) {
  const [rating, setrating] = useState(0);

  const handleuserating = (rating) => {
    setrating(rating);
  };


  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.ratingContainer}>
        <ReactStars
          count={5}
          onChange={(rating) => handleuserating(rating)}
          size={25}
          color1={"lightgray"}
          color2={"gold"}
          half={false}
          value={rating}
        />
      </div>

      <div className={styles.testimonialCard}>
        <div>
          <p className={styles.reviewText}>{reviewtext}</p>
        </div>
        <div className={styles.userInfoContainer}>
          <div className={styles.userAvatar}></div>
          <div className={styles.userDetails}>
            <p className={styles.userName}>{username}</p>
            <p className={styles["user-address"]}>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
