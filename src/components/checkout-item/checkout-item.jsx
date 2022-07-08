import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.scss";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, quantity, price } = item;
  const cartItems = useSelector(selectCartItems);
  const removeItem = () => dispatch(removeItemToCart(cartItems, item));
  const addItem = () => dispatch(addItemToCart(cartItems, item));
  const clearItem = () => dispatch(clearItemFromCart(cartItems, item));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}$</span>
      <div onClick={clearItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
