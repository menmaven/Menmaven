import React, { useEffect, useState } from "react";
import styles from "../../Styles/Cart.module.css"; 
import Link from "next/link";
import Select from "react-select";

const CartListPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [color, setColor] = useState("Brown");
  const [size, setSize] = useState("34");
  const [quantity, setQuantity] = useState(1);

  const colorOptions = [
    { value: "Black", label: "Black" },
    { value: "Brown", label: "Brown" },
  ];

  const sizeOptions = [
    { value: "32", label: "32" },
    { value: "34", label: "34" },
    { value: "36", label: "36" },
  ];

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return selectedItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckboxChange = (id, item) => {
    if (selectedItems.some((selectedItem) => selectedItem.id === id)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem.id !== id)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className={styles["cartContainer"]}>
      {cart?.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/">Go shopping!</Link>
        </p>
      ) : (
        <div>
          {cart?.map((item) => (
            <div className={styles["cartItemContainer"]} key={item.id}>
              <input
                type="checkbox"
                checked={selectedItems.some(
                  (selectedItem) => selectedItem.id === item.id
                )}
                onChange={() => handleCheckboxChange(item.id, item)}
                className={styles["customCheckbox"]}
              />
              <div className={styles["cartItem"]}>
                <div className={styles["imageContainer"]}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className={styles["cartImg"]}
                  />
                </div>
                <div className={styles["detailsContainer"]}>
                  <div className={styles["header"]}>
                    <label>
                      <span className={styles["productName"]}>{item.name}</span>
                    </label>
                  </div>
                  <div className={styles["priceContainer"]}>
                    <span className={styles["currentPrice"]}>
                      ₹ {item.price}
                    </span>
                    <span className={styles["originalPrice"]}>
                      ₹ {item.originalPrice}
                    </span>
                  </div>

                  <div className={styles["dropdownContainer"]}>
                    <Select
                      options={colorOptions}
                      value={colorOptions.find((option) => option.value === color)}
                      onChange={(selectedOption) => setColor(selectedOption.value)}
                    />
                    <Select
                      options={sizeOptions}
                      value={sizeOptions.find((option) => option.value === size)}
                      onChange={(selectedOption) => setSize(selectedOption.value)}
                    />
                  </div>

                  <div className={styles["quantityContainer"]}>
                    <span>Quantity</span>
                    <button
                      onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                      className={styles["quantityButton"]}
                    >
                      -
                    </button>
                    <span className={styles["quantity"]}>{quantity}</span>
                    <button
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className={styles["quantityButton"]}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles["removeItem"]}>X</div>
              <div className={styles["separator"]} />
            </div>
          ))}

          {selectedItems.length > 0 && (
            <div className={styles["selectedItemsContainer"]}>
              <h2>Selected Items:</h2>
              {selectedItems.map((item) => (
                <div key={item.id} className={styles["selectedItem"]}>
                  <p className={styles["selectedItemName"]}>{item.name}</p>
                  <p className={styles["selectedItemPrice"]}>₹ {item.price}</p>
                </div>
              ))}
              <div className={styles["grandTotalContainer"]}>
                <p className={styles["grandTotalLabel"]}>Grand Total</p>
                <p className={styles["grandTotalPrice"]}>₹ {calculateTotal()}</p>
              </div>
              <button
                onClick={() => finalCartHandler(currentsuggestion)}
                className={styles["addItemBtn"]}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartListPage;
