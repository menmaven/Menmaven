"use client";

import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import BannerStyles from "../../../Styles/Banner.module.css"
import Modal from '@/Modules/Modal/Modal';
import ContactUsPage from '../../ContactUsPage/ContactUsPage';
function DesktopNavBar() {

    const [isShowContactForm, setisShowContactForm] = useState(false);
    const closeContactForm = () => {
      setisShowContactForm(false);
    };
  
    const openContactForm = () => {
      setisShowContactForm(true);
    };
  return (
    <div >
                <nav style={{display:'flex', flexDirection:'row',justifyContent:'center', width:'100%'}}>
      <ul className={BannerStyles['navbar-wrapper']}>
        <div className={BannerStyles["nav-left-container"]}>
        <IoIosSearch color='white' size={30}/>
            <li className={BannerStyles['nav-link']}>Home</li>
            <li className={BannerStyles['nav-link']}>Shop</li>
        </div>
         <div  className={BannerStyles["nav-left-container"]}>
            <li className={BannerStyles['nav-right-link']}>Categories</li>
            <li className={BannerStyles['nav-right-link']} onClick={()=> openContactForm()}>About</li>
         <HiOutlineShoppingBag color='black' size={30} />
         </div> 

          </ul>
        </nav>
        <Modal
        open={isShowContactForm}
        onClose={closeContactForm}
        // width={"auto"}
        // height={"auto"}
        position={"center"}
      >
       <ContactUsPage />
        </Modal>
    </div>
  )
}

export default DesktopNavBar