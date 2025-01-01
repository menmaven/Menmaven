"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import { Link, useRoutes } from "react-router-dom";
import Modal from "@/Modules/Modal/Modal";
import { BsSearch } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import MobileBanner from "../Banner/MobileBanner";
// import logo from "../images/logo.png";

const Navbar = () => {
  const [width, setWidth] = useState(0);

const [isShowModal, setIsShowModal] = useState(false)


useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
const closemenu = () => {
  setIsShowModal(false)
}

const openmenu = () => {
  setIsShowModal(true)
}

const handleLinkClick = () => {
  closemenu();
};
  
  return (
    <nav className="navbar-one" style={{ position: 'relative', height: '80px', display: 'flex', alignItems: 'center' }}>
    <div
      style={{
        position: 'absolute',
        left: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
      onClick={() => openmenu()}
    >
      <IoIosMenu size={40} />
    </div>

    <img
  src="/images/logo.png"
  alt="menu"
  style={{
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -65%)', // Adjust the Y translation to make space for the text below
    width: '90px',
    height: '50px',
  }}
/>
<p
  style={{
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, 20px)', // Position below the logo
    fontSize: '14px', // Adjust font size if needed
    fontWeight: 'bold', // Optional: Make the text bold
  }}
>
  MEN MAVEN
</p>


    <div
      style={{
        position: 'absolute',
        right: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <BsSearch size={25} />
      <CiHeart size={30} />
      <TbShoppingBagPlus size={30} />
    </div>

<Modal
      open={
              isShowModal
              }
              onClose={closemenu}
              width={'100%'}
              height={"auto"}
              position={"right"}
              style={{top:0,backgroundColor:'#FAF7F0'}}>
                {/* <div style={{height:'1px',width:'auto',backgroundColor:'white',marginTop:"30px",marginLeft:'-30px'}} /> */}
   <div style={{marginBottom:'50px'}} >
        <li className="navbar-link-text">
          <a href={"/"} className="nav-link" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li className="navbar-link-text">
          <a href={"/"} className="nav-link" onClick={handleLinkClick}>
            Shop
          </a>
        </li>

        <li className="navbar-link-text">
          <a href={"/"} className="nav-link " onClick={handleLinkClick}>
          Categories
          </a>
        </li>

        <li className="navbar-link-text">
          <a href={"/"} className="nav-link " onClick={handleLinkClick}>
            About
          </a>
        </li>

      </div>
              </Modal>

   {
    width > 768 &&
    <ul className="nav-list">
    {/* <li>
      <a to={"/"} className="nav-link">
        Blog
      </a>
    </li>
    <li>
      <Link to={"/"} className="nav-link">
        Loan
      </Link>
    </li>
    <li>
      <Link to={"/"} className="nav-link ">
        Testimonials
      </Link>
    </li>
    <li>
      <Link to={"/"} className="nav-link ">
        Contact
      </Link>
    </li> */}
  </ul>
   }
    </nav>
  );
};

export default Navbar;
