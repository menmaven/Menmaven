"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Modal from "@/Modules/Modal/Modal";
import { BsSearch } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import ContactUsPage from "../ContactUsPage/ContactUsPage";

const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(4); // Number of items in the cart

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
    setIsShowModal(false);
  };

  const openmenu = () => {
    setIsShowModal(true);
  };



  const handleLinkClick = () => {
    closemenu();
  };

  return (
    <nav className="navbar-one" style={{ position: "relative", display: "flex", alignItems: "center", height:"80px" }}>
      <div
        style={{
          position: "absolute",
          left: "15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
        onClick={() => openmenu()}
      >
        <IoIosMenu size={30} />
      </div>

      <img
        src="/images/logo.png"
        alt="menu"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -65%)", // Adjust the Y translation to make space for the text below
          width: "72px",
          height: "38px",
        }}
      />
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, 20px)", // Position below the logo
          fontSize: "14px", // Adjust font size if needed
          fontFamily: "BankGothic Md BT",
        }}
      >
        MEN MAVEN
      </span>

      <div
        style={{
          position: "absolute",
          right: "15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <BsSearch size={20} />
        <CiHeart size={25} />
        <div style={{ position: "relative" }}>
          <HiOutlineShoppingBag size={25} />
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "#ff4d4d",
              color: "white",
              fontSize: "12px",
              fontWeight: "bold",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cartItemCount}
          </span>
        </div>
      </div>

      <Modal
        open={isShowModal}
        onClose={closemenu}
        width={"100%"}
        height={"auto"}
        position={"right"}
        style={{ top: 0, backgroundColor: "#FAF7F0" }}
      >
        <div style={{ marginBottom: "50px" }}>
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

          <li className="navbar-link-text" >
            <a href={"/"} className="nav-link " onClick={handleLinkClick}>
              About
            </a>
          </li>
        </div>
      </Modal>

      {width > 768 && (
        <ul className="nav-list">
          {/* Add other navigation items here */}
        </ul>
      )}


    </nav>
  );
};

export default Navbar;































