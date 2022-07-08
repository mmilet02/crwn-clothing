import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase";
import CardIcon from "../../components/card-icon/card-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo"></CrownLogo>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CardIcon></CardIcon>
        </NavLinks>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
