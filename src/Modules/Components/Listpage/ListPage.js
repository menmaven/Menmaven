import React from 'react';
import styles from '../../Styles/ListPage.module.css'; 
import { IoBookmarkOutline } from "react-icons/io5";

const ListPage = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productHeader}>
        <span className={styles.rating}>4.5 ★</span>
        <button className={styles.wishlistBtn}><IoBookmarkOutline /></button>
      </div>

      <img
        src="/images/belt.png" 
        alt="Brown Shoes"
        className={styles.productImage}
      />

      <h3 className={styles.productName}>Brown Shoes</h3>

    <div className={styles.priceContainer}>
        <span className={styles.discount}>-10%</span>
        <div className={styles.priceDetails}>
          <span className={styles.currentPrice}>₹1233.00</span>
          <span className={styles.originalPrice}>₹1499.00</span>
        </div>
      </div>

      {/* <button className={styles.addToCartBtn}>+</button> */}
      <button 
      // onClick={()=> finalCartHandler(currentsuggestion)} 
      className={styles['add-item-btn']}>
        Add To Bag
          </button>
    </div>
  );
};

export default ListPage; 
