import Image from "next/image";
import styles from "../../Styles/DesktopListPage.module.css";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";

const DesktopDetailsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src="/images/belt.png" // Replace with actual image path
          alt="Pearl Ear Earrings"
          width={500}
          height={500}
          className={styles.productImage}
        />
      </div>

      <div className={styles.detailsSection}>
        <p className={styles.breadcrumb}>Home &gt; Tops &gt; Pearl Ear Earrings</p>
        <h1 className={styles.productTitle}>Pearl Ear Earrings</h1>
        <p className={styles.price}>$35.00 <span className={styles.stock}>In stock</span></p>
        <p className={styles.description}>
          Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations create a modern look.
        </p>

        <div className={styles.quantityContainer}>
          <button className={styles.quantityBtn}>-</button>
          <span className={styles.quantity}>1</span>
          <button className={styles.quantityBtn}>+</button>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.addToCart}>Add To Cart</button>
          <button className={styles.wishlist}>Add to Wishlist</button>
        </div>

        <p className={styles.sku}>SKU: C3FC1BHBI5</p>
        <p className={styles.category}>Category: Tops</p>

        <div className={styles.shareIcons}>
          <span>Share:</span>
          <button className={styles.shareBtn}><SlSocialFacebook /></button> 
          <button className={styles.shareBtn}><FaXTwitter /></button> 
          <button className={styles.shareBtn}><SiWhatsapp /></button> 
        </div>
      </div>
    </div>
  );
};

export default DesktopDetailsPage;
