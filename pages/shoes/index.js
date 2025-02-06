import React, { useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import ListPage from '@/Modules/Components/Listpage/ListPage';
import Shoes from '@/Modules/Components/Constants/Shoes';
import Link from 'next/link';
import DesktopListPage from '@/Modules/Components/Listpage/DesktopListPage';

function Index() {
  const [width, setWidth] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show or hide the back-to-top button based on scroll position
  useEffect(() => {
    // Make sure window is defined (client-side)
      const updateWidth = () => setWidth(window.innerWidth);
      updateWidth(); // Initial check
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
  }, []); // Only runs once on component mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr',justifyContent:'center',width:'100%'}}>
      {Shoes.map((shoes, index) => (
        <Link href={`/shoes/${shoes?.id}`} key={index}>
          {width > 768 ? (
            <DesktopListPage shoes={shoes} />
          ) : (
            <ListPage shoes={shoes} />
          )}
        </Link>
      ))}
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s',
          }}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Index;
