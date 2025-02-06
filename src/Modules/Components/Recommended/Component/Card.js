import React from 'react';
import styles from '../../../Styles/Card.module.css';

const Card= () => {
  return (
    <div className={styles.card}>
      <div className={styles.favoriteIcon}>&#9829;</div>
      <img
        src="/Images/belt.png" 
        alt="Product"
        className={styles.productImage}
      />
      <h3 className={styles.productTitle}>CLASSIC SUMMER WATCH</h3>
      <div className={styles.priceSection}>
        <span className={styles.discountedPrice}>₹1299.00</span>
        <span className={styles.originalPrice}>₹1699.00</span>
      </div>
      <div className={styles.rating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= 3 ? styles.filledStar : styles.emptyStar}>
            ★
          </span>
        ))}
      </div>
      <div className={styles.addButton}>+</div>
    </div>
  );
};

export default Card
