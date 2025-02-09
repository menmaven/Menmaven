import React, { useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import ListPage from '@/Modules/Components/Listpage/ListPage';
import Shoes from '@/Modules/Components/Constants/Shoes';
import Link from 'next/link';
import DesktopListPage from '@/Modules/Components/Listpage/DesktopListPage';
import styles from "../../src/Modules/Styles/DesktopListPage.module.css"

function Index() {
  const [width, setWidth] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
      const updateWidth = () => setWidth(window.innerWidth);
      updateWidth(); 
      window.addEventListener("resize", updateWidth);

      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowBackToTop(true);
        } else {
          setShowBackToTop(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener("resize", updateWidth);
        window.removeEventListener('scroll', handleScroll);
      };
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles['container-list']}>
      {Shoes.map((shoes, index) => (
        <Link href={`/shoes/${shoes?.id}`} key={index}>
          {width > 768 ? (
            <DesktopListPage shoes={shoes} />
          ) : (
            <ListPage shoes={shoes} />
          )}
        </Link>
      ))}
      {showBackToTop && (
        <button
        className={styles['backtotopbutton']}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Index;
