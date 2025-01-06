import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Use useRouter from Next.js
import allItems from "../Constants/index";
import styles from "../../Styles/Details.module.css";
import suggestion from "../Constants/suggestion";
import Recommended from "../Recommended/Recommended";
import Link from "next/link";

const DetailsPage = ({ shoeDetails }) => {
  const router = useRouter(); // useRouter hook for Next.js routing
  const { id } = router.query; // Access the route parameter using query
  const currentsuggestion = allItems.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const [size, setSize] = useState(null); // State to manage selected size
  const [isSuccess, setIsSuccess] = useState(false);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (currentsuggestion && currentsuggestion.quantity) {
      setQuantity(currentsuggestion.quantity);
    }
  }, [currentsuggestion]);

  if (isSuccess) {
    setTimeout(() => setIsSuccess(false), 1500);
  }

  const [suggestItems, setSuggestItems] = useState([]);








  const [cart, setCart] = useState([])

  const cartHandler = currentItem => {

    const alreadyAdded = cart.find(item => item.id === currentItem.id)

    if (alreadyAdded) {
      const reamingCarts = cart.filter(item => cart.id !== currentItem)
      setCart(reamingCarts);
    } else {
      const newCart = [...cart, currentItem]
      setCart(newCart);
    }
  }





















  useEffect(() => {
    const suggestItem = suggestion.slice(0, 3);
    setSuggestItems(suggestItem);
  }, []);

  const newSuggestionItem = () => {
    const newSuggestItems = suggestion.slice(3, 6);
    suggestion.splice(0, 3);
    setSuggestItems(newSuggestItems);
  };

  function goBack() {
    router.push("/"); // Use Next.js router to navigate
    window.scrollTo(0, 9999);
  }

  // Handler for increasing quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Handler for decreasing quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const selectSize = (selectedSize) => {
    setSize(selectedSize);
  };

  const finalCartHandler = currentItem => {
    currentItem.quantity = quantity;

    cartHandler(currentItem);
    setIsSuccess(true);
}

if (isSuccess) {
    setTimeout(() => setIsSuccess(false), 1500);
}

console.log(cart, "CARTITEM")

  return (
    <div className={styles['container']}>
      <div className={styles['text-Center']}></div>

      <div>
        <img
          src={shoeDetails.img}
          alt={shoeDetails.name}
          className={styles['image-container']}
        />
              <nav className={styles['breadcrumbs']}>
        <Link href="/">Home</Link> / 
        <Link href="/shoes"> Shoes</Link> / 
        <span> {shoeDetails.name}</span>
      </nav>
      <div className={styles['details-container']}> 
        <span className={styles['heading-text']}>{shoeDetails.name}</span>
        {/* <p>{shoeDetails.description}</p> */}
        {/* <p>{shoeDetails.story}</p> */}
        <p className={styles['subheading']}>
          <strong>Price: </strong>${shoeDetails.price}
        </p>

        {/* Size Selector */}
        <div className={styles['size-container']}>
        <span className={styles['subheading']}>Select Size:</span>
  <div className={styles['button-wrapper']}>
    {[7, 8, 9, 10, 11].map((shoeSize) => (
      <button
        key={shoeSize}
        className={`${styles['size-button']} ${
          size === shoeSize ? styles['active-size'] : ""
        }`}
        onClick={() => selectSize(shoeSize)}
      >
        {shoeSize}
      </button>
    ))}
  </div>
</div>


        {/* Quantity Selector */}
        <div className={styles['quantity-selector']}>
        <span className={styles['subheading']}>Quantity:</span>
          <button onClick={decrementQuantity} className={styles['size-button']}>
            -
          </button>
          <span className={styles['quantity-display']}>{quantity}</span>
          <button onClick={incrementQuantity} className={styles['size-button']}>
            +
          </button>
        </div>
        <div>
        <button onClick={()=> finalCartHandler(currentsuggestion)} className={styles['add-item-btn']}>
        Add To Bag
          </button>
        </div>
        {isSuccess &&
                            <p
                                style={{color:'green'}}
                            > Item added to Cart
                            </p>
                        }
      </div>

      {/* Suggested Items */}
      <div>
        {suggestItems.map((recommendFood) => (
          <Recommended
            recommend={recommendFood}
            key={recommendFood._id}
            currentsuggestion={currentsuggestion}
          ></Recommended>
        ))}
      </div>
      </div>
    </div>
  );
};

export default DetailsPage;
