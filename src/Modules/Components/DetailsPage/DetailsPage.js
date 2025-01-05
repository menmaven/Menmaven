import { faCartArrowDown, faCheckCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import allFoods from '../../fakeData/index';
import suggestionFood from '../../fakeData/suggestionFood';
import RecommendFood from '../RecommendFood/RecommendFood';
import styles from './FoodDetails.module.css';

const FoodDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let history = useHistory();
  const { id } = useParams();
  const currentFood = allFoods.find((food) => food.id === id);

  const [quantity, setQuantity] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (currentFood.quantity) {
      setQuantity(currentFood.quantity);
    }
  }, [currentFood.quantity]);

  const finalCartHandler = (currentFood) => {
    currentFood.quantity = quantity;
    props.cartHandler(currentFood);
    setIsSuccess(true);
  };

  if (isSuccess) {
    setTimeout(() => setIsSuccess(false), 1500);
  }

  const [suggestFoods, setSuggestFoods] = useState([]);

  useEffect(() => {
    const suggestFood = suggestionFood.slice(0, 3);
    setSuggestFoods(suggestFood);
  }, []);

  const newSuggestionFood = () => {
    const newSuggestFood = suggestionFood.slice(3, 6);
    suggestionFood.splice(0, 3);
    setSuggestFoods(newSuggestFood);
  };

  function goBack() {
    history.push('/');
    window.scrollTo(0, 9999);
  }

  return (
    <div className={`container ${styles.container}`}>
      <div className={`text-center ${styles.textCenter}`}>
        <div onClick={goBack}>
          <button
            className={`${styles.closeButton}`}
            onClick={newSuggestionFood}
          >
            <FontAwesomeIcon icon={faWindowClose} />
            <span>Close</span>
          </button>
        </div>
      </div>
      <div className={`row ${styles.foodDetailsRow}`}>
        <div className={`col-md-7 ${styles.foodDetailsLeft}`}>
          <h1 className={styles.foodName}>{currentFood.name}</h1>
          <p className={styles.foodStory}>{currentFood.story}</p>
          <div className={`${styles.cartControllerWrapper}`}>
            <h2 className={styles.foodPrice}>₹{currentFood.price}</h2>
            <div className={styles.cartController}>
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                className={styles.quantityButton}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className={`${styles.action}`}>
            <button
              className={styles.addButton}
              onClick={() => finalCartHandler(currentFood)}
            >
              <FontAwesomeIcon icon={faCartArrowDown} />
              <span>Add</span>
            </button>
            {isSuccess && (
              <p className={styles.successMessage}>
                <FontAwesomeIcon icon={faCheckCircle} /> Item added to Cart
              </p>
            )}
          </div>
          <div className={styles.recommendations}>
            {suggestFoods.map((recommendFood) => (
              <RecommendFood
                recommendFoods={recommendFood}
                key={recommendFood.id}
                currentFood={currentFood}
              />
            ))}
          </div>
        </div>
        <div className={`col-md-5 ${styles.foodImageWrapper}`}>
          <img className={styles.foodImage} src={currentFood.img} alt={currentFood.name} />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
