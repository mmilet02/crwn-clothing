import "./checkout.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
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
