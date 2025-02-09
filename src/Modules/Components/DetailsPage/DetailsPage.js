import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import allItems from "../Constants/index";
import styles from "../../Styles/Details.module.css";
import suggestion from "../Constants/suggestion";
import Recommended from "../Recommended/Recommended";
import Link from "next/link";

const DetailsPage = ({ shoeDetails }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentsuggestion = allItems.find((item) => item.id === id);
  console.log(currentsuggestion, "CURRERERERETETEGEFEFFEFEFE");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cart, setCart] = useState([]);
  const [suggestItems, setSuggestItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (currentsuggestion && currentsuggestion.quantity) {
      setQuantity(currentsuggestion.quantity);
    }
  }, [currentsuggestion]);

  useEffect(() => {
    const suggestItem = suggestion.slice(0, 3);
    setSuggestItems(suggestItem);
  }, []);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const selectSize = (selectedSize) => setSize(selectedSize);
  const selectColor = (selectedColor) => setColor(selectedColor);

  //   const cartHandler = (currentItem) => {
  //     debugger
  //     console.log(cart, "cararartata")
  //     const alreadyAdded = cart.find((item) => item.id === currentItem.id);
  // console.log(alreadyAdded, "QKWDHQJKWHDJQKWHDQWHD")
  //     if (alreadyAdded) {
  //       const updatedCart = cart.map((item) =>
  //         item.id === currentItem.id
  //           ? { ...item, quantity: item.quantity + currentItem.quantity }
  //           : item
  //       );
  //       setCart(updatedCart);
  //     } else {
  //       const newCart = [...cart, currentItem];
  //       setCart(newCart);
  //     }
  //   };

  const finalCartHandler = (currentItem) => {
    if (!size || !color) {
      alert("Please select both size and color!");
      return;
    }

    const itemToAdd = {
      ...currentItem,
      quantity: quantity || 1,
      size,
      color,
    };

    cartHandler(itemToAdd);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      router.push("/cart");
    }, 1500);
  };

  const cartHandler = (currentItem) => {
    const alreadyAdded = cart.find((item) => item.id === currentItem.id);
    if (alreadyAdded) {
      debugger;
      // If the item is already in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.id === currentItem.id
          ? { ...item, quantity: item.quantity + currentItem.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it
      const newCart = [...cart, currentItem];
      setCart(newCart);
    }
  };

  const goBack = () => {
    router.push("/");
    window.scrollTo(0, 9999);
  };

  const availableColors = [
    "black",
    "brown",
    "pink",
    "darkbrown",
    "lightgray",
    "blue",
    "gray",
    "red",
  ];

  console.log(cart, "CARARARATARARATARATARATARTARATRA");

  return (
    <div className={styles["container"]}>
      <div>
        <img
          src={shoeDetails.img}
          alt={shoeDetails.name}
          className={styles["image-container"]}
        />
        <nav className={styles["breadcrumbs"]}>
          <Link href="/">Home</Link> / <Link href="/shoes">Shoes</Link> /{" "}
          <span>{shoeDetails.name}</span>
        </nav>
        <div className={styles["details-container"]}>
          <span className={styles["heading-text"]}>{shoeDetails.name}</span>
          <p className={styles["subheading"]}>
            <strong>Price: </strong>${shoeDetails.price}
          </p>

          {/* Size Selector */}
          <div className={styles["size-container"]}>
            <span className={styles["subheading"]}>Select Size:</span>
            <div className={styles["button-wrapper"]}>
              {[7, 8, 9, 10, 11].map((shoeSize) => (
                <button
                  key={shoeSize}
                  className={`${styles["size-button"]} ${
                    size === shoeSize ? styles["active-size"] : ""
                  }`}
                  onClick={() => selectSize(shoeSize)}
                >
                  {shoeSize}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className={styles["color-container"]}>
            <span className={styles["subheading"]}>Select Color:</span>
            <div className={styles["color-wrapper"]}>
              {availableColors.map((colorOption) => (
                <div
                  key={colorOption}
                  className={`${styles["color-box"]} ${
                    color === colorOption ? styles["active-color"] : ""
                  }`}
                  style={{
                    backgroundColor: colorOption,
                  }}
                  onClick={() => selectColor(colorOption)}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className={styles["quantity-selector"]}>
            <span className={styles["subheading"]}>Quantity:</span>
            <button
              onClick={decrementQuantity}
              className={styles["size-button"]}
            >
              -
            </button>
            <span className={styles["quantity-display"]}>{quantity}</span>
            <button
              onClick={incrementQuantity}
              className={styles["size-button"]}
            >
              +
            </button>
          </div>

          {/* Add to Bag Button */}
          <div>
            <button
              onClick={() => finalCartHandler(currentsuggestion)}
              className={styles["add-item-btn"]}
            >
              ADD TO BAG
            </button>
          </div>
          {isSuccess && <p style={{ color: "green" }}>Item added to Cart</p>}
        </div>

        {/* Suggested Items */}
        <div>
          {suggestItems.map((item) => (
            <Recommended
              recommend={item}
              key={item.id}
              currentsuggestion={currentsuggestion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
