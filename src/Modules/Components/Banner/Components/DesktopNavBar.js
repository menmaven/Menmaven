"use client";

import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import BannerStyles from "../../../Styles/Banner.module.css"
function DesktopNavBar() {
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
            <li className={BannerStyles['nav-right-link']}>About</li>
         <HiOutlineShoppingBag color='black' size={30} />
         </div> 

          </ul>
        </nav>
    </div>
  )
}

export default DesktopNavBar