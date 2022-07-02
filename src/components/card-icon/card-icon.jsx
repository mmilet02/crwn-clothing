import "./card-icon.scss";
import { useContext } from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart";
const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShopingIcon className="shopping-icon"></ShopingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
