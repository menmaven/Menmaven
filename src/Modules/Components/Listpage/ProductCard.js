import styles from "../../Styles/ProductCard.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ image, title, category, price, isHot = false }) => {
  return (
    <div className={styles.card}>
      {isHot && <span className={styles.hotBadge}>HOT</span>}

      <div className={styles.imageWrapper}>
        <img src="/images/belt.png" alt={title} className={styles.productImage} />
        <div className={styles.iconsContainer}>
          <button className={styles.iconButton}>
          <HiOutlineShoppingBag size={28}/>
          </button>
          <button className={styles.iconButton}>
          <CiHeart size={28}/>
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




