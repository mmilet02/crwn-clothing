import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import "./checkout.scss";

const Checkout = () => {
  const total = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  const titles = [
    { id: 1, description: "Product" },
    { id: 2, description: "Description" },
    { id: 3, description: "Quantity" },
    { id: 4, description: "Price" },
    { id: 5, description: "Remove" },
  ];

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {titles.map((title) => (
          <div key={title.id} className="header-block">
            <span>{title.description}</span>
          </div>
        ))}
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item}></CheckoutItem>
      ))}
      <span className="total">Total: {total}$</span>
    </div>
  );
};

export default Checkout;
