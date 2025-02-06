import React from 'react'
import FooterStyles from "../../Styles/Footer.module.css"

function Footer() {
  return (
    <div style={{backgroundColor:'#faf7f0', padding:'10px 0px'}}>
      <ul className={FooterStyles["footer-wrapper-container"]} style={{listStyle:'none'}}>
        <li  className={FooterStyles["footer-link-text"]}>
            CONTACT US
        </li>
        <li className={FooterStyles["footer-link-text"]}>
         DELIVERY POLICY
        </li>
        <li className={FooterStyles["footer-link-text"]}>
        PRIVACY POLICY
        </li>
        <li className={FooterStyles["footer-link-text"]}>
        CUSTOMER CARE
        </li>
        <li className={FooterStyles["footer-link-text"]}>
        EXCHANGE AND RETURN
        </li>
      </ul>
      <div
        className={FooterStyles["copy-right-container"]}
      >
        <p
        className={FooterStyles["copy-right-text"]}

        >
          Copyright © 2024 MenMaven
        </p>
        <p
        className={FooterStyles["copy-right-text"]}
        >
          All Right Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
