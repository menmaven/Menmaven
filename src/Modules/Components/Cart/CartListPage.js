import React, { useEffect, useState } from "react";
import styles from "../../Styles/Cart.module.css"; // Assuming you have styles for the cart page
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
    return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckboxChange = (id, item) => {
    if (selectedItems.some((selectedItem) => selectedItem.id === id)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className={styles["cart-container"]}>
      {cart?.length === 0 ? (
        <p>Your cart is empty. <Link href="/">Go shopping!</Link></p>
      ) : (
        <div>
          {cart?.map((item) => (
            <> 
            <div style={{display:'flex', flexDirection:'row', margin:'5px 20px', gap:'10px'}} key={item.id}>
 
 <input
                      type="checkbox"
                      checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
                      onChange={() => handleCheckboxChange(item.id, item)}
                      className={styles["custom-checkbox"]}
                    />
                    <div style={{display:"flex", flexDirection:'row', gap:'10px'}}>
                    <div className={styles.imageContainer}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.cartImg}
                />
              </div>
              <div>
              <div className={styles.header}>
                  <label>
        
                    <span className={styles.productName}>{item.name}</span>
                  </label>
                </div>
                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>₹ {item.price}</span>
                  <span className={styles.originalPrice}>₹ {item.originalPrice}</span>
                </div>

                <div className={styles.dropdownContainer}>
                  <Select
                    options={colorOptions}
                    value={colorOptions.find((option) => option.value === color)}
                    onChange={(selectedOption) => setColor(selectedOption.value)}
                    styles={{
                      control: (base) => ({
                        ...base,
                        minHeight: "30px",
                        fontSize: "14px",
                        border: "none",
                      }),
                    }}
                  />
                  <Select
                    options={sizeOptions}
                    value={sizeOptions.find((option) => option.value === size)}
                    onChange={(selectedOption) => setSize(selectedOption.value)}
                    styles={{
                      control: (base) => ({
                        ...base,
                        minHeight: "30px",
                        fontSize: "14px",
                        border: "none",
                      }),
                    }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span>Quantity</span>
                  <button
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    style={{
                      border: "none",
                      padding: "1px 3px",
                      cursor: "pointer",
                      backgroundColor: 'white',
                      fontSize: "25px"
                    }}
                  >
                    -
                  </button>
                  <span style={{ padding: "3px 10px", border: "none" }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    style={{
                      border: "none",
                      padding: "1px 3px",
                      cursor: "pointer",
                      backgroundColor: 'white',
                      fontSize: "25px"
                    }}
                  >
                    +
                  </button>
                </div>
              
                </div>
                      </div>

                      <div style={{alignSelf:'baseline'}}>
                        X
                      </div>
                      
            </div>
            <div style={{height:'1px', width:'auto', backgroundColor:'black', margin:'10px 20px'}} />

            </>
          ))}
          
          {selectedItems.length > 0 && (
            <div style={{backgroundColor:'lightgray', margin:'5px 20px', padding:'10px 25px'}}>
              <h2>Selected Items:</h2>
              {selectedItems.map((item) => (
                <> 
                <div key={item.id} style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                  <p style={{fontSize:'20px', color:'black', fontWeight:'700'}}>{item.name}</p>

                  <p style={{fontSize:'20px', color:'black', fontWeight:'700'}}>₹ {item.price}</p>
                  
                </div>
            <div style={{height:'1px', width:'auto', backgroundColor:'black'}} />
            </>
              ))}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                  <p style={{fontSize:'20px', color:'black', fontWeight:'700'}}>Grand Total</p>

                  <p style={{fontSize:'20px', color:'black', fontWeight:'700'}}>₹ {calculateTotal()}</p>
                  
                </div>
                <button
              onClick={() => finalCartHandler(currentsuggestion)}
              className={styles["add-item-btn"]}
            >
              Proceed to Checkout
            </button>
            </div>
          )}
          {/* <Link href="/checkout">
            <button className={styles["checkout-btn"]}>Proceed to Checkout</button>
          </Link> */}
 
        </div>
      )}
    </div>
  );
};

export default CartListPage;
