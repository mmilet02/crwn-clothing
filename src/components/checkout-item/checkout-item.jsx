import "./checkout-item.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

const CheckoutItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}$</span>
      <div onClick={() => deleteItemFromCart(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
