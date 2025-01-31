import styles from "../../Styles/ProductCard.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ image, title, category, price, isHot = false }) => {
  return (
    <div className={styles.card}>
      {isHot && <span className={styles.hotBadge}>HOT</span>}

      <div className={styles.imageWrapper}>
        <img src="/images/belt.png" alt={title} className={styles.productImage} />
        <div className={styles.iconsContainer}>
          <button className={styles.iconButton}>
            {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
          </button>
          <button className={styles.iconButton}>
            {/* <FontAwesomeIcon icon={faHeart} /> */}
          </button>
        </div>
      </div>

      <div className={styles.textContainer}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;





// import Image from "next/image";
// import styles from "../../Styles/ProductCard.module.css";

// const ProductCard = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.imageSection}>
//         <Image
//           src="/images/belt.png" // Replace with actual image path
//           alt="Pearl Ear Earrings"
//           width={500}
//           height={500}
//           className={styles.productImage}
//         />
//       </div>

//       <div className={styles.detailsSection}>
//         <p className={styles.breadcrumb}>Home &gt; Tops &gt; Pearl Ear Earrings</p>
//         <h1 className={styles.productTitle}>Pearl Ear Earrings</h1>
//         <p className={styles.price}>$35.00 <span className={styles.stock}>In stock</span></p>
//         <p className={styles.description}>
//           Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations create a modern look.
//         </p>

//         <div className={styles.quantityContainer}>
//           <button className={styles.quantityBtn}>-</button>
//           <span className={styles.quantity}>1</span>
//           <button className={styles.quantityBtn}>+</button>
//         </div>

//         <div className={styles.buttonContainer}>
//           <button className={styles.addToCart}>Add To Cart 🛒</button>
//           <button className={styles.wishlist}>♡ Add to Wishlist</button>
//         </div>

//         <p className={styles.sku}>SKU: C3FC1BHBI5</p>
//         <p className={styles.category}>Category: Tops</p>

//         <div className={styles.shareIcons}>
//           <span>Share:</span>
//           <button className={styles.shareBtn}>🔵</button>
//           <button className={styles.shareBtn}>❌</button>
//           <button className={styles.shareBtn}>📌</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
