import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const navigateToCheckouHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <Button buttonType="inverted" onClick={navigateToCheckouHandler}>
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
