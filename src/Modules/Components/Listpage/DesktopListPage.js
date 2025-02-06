import ProductCard from "./ProductCard";
import styles from "../../Styles/ProductCard.module.css";

export default function DesktopListPage() {
  return (
    <div className={styles.container}>
      <ProductCard
        image="/lash-princess.png"
        title="Lash Princess"
        category="Makeup"
        price="$20.00"
      />
    </div>
  );
}
