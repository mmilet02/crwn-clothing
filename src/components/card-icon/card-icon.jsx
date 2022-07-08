import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import "./card-icon.scss";

const CardIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  return (
    <div
      className="cart-icon-container"
      onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
    >
      <ShopingIcon className="shopping-icon"></ShopingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
