"use client";

import React, { useState } from 'react';
import styles from '../../Styles/MainContact.module.css';

function MainContactPage({width}) {



  return (
    <div>
{ width  > 768 ?
      <div className={styles.container}>
        <img
          className={styles.backgroundImage}
          src={'https://vmnk.gumlet.io/get-quote-imagethird.svg'}
          alt="Background"
        />
        <div className={styles.card}>
          <div>
            <h2 className={styles.heading}>
              Stay in the know --- Join us for exclusive updates
            </h2>
            <p className={styles.text}>{FAKE_REVIEW_TEXT}</p>
            <div className={styles.form}>
              <input
                className={styles.input}
                placeholder="Enter Your Email"
              />
              <button className={styles.button}>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div> :
      <div>
      <div>
        <p className={styles.signuptext}>Signup for latest update</p>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
         <input
         placeholder='Enter Your Email'
         className={styles.inputstyle}
         />
         <button
         className={styles.buttonstyle}
         >
          Subscribe
         </button>
          </div>
        </div>
}
    </div>
  );
}

export default MainContactPage;
