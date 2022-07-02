import { createContext, useState, useEffect } from "react";

const addCartItems = (cartItems, productToAdd) => {
  if (cartItems.find((item) => item.id === productToAdd.id)) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        let tempItem = item;
        item.quantity += 1;
        return tempItem;
      }
      return item;
    });
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItems = (cartItems, productToAdd) => {
  const temp = cartItems.map((item) => {
    if (item.id === productToAdd.id) {
      let tempItem = item;
      item.quantity -= 1;
      return tempItem;
    }
    return item;
  });

  return temp.filter((item) => item.quantity !== 0);
};

const deleteCartItems = (cartItems, productToDelete) => {
  return cartItems.filter((item) => item.id !== productToDelete.id);
};

export const CartContext = createContext({
  isCartOpen: [],
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  removeItemFromCart: () => null,
  deleteItemFromCart: () => null,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, cardItem) => total + cardItem.quantity * cardItem.price,
      0
    );

    const numberOfItems = cartItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCartCount(numberOfItems);
    setTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItems(cartItems, productToRemove));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItems(cartItems, productToDelete));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartItems,
    cartCount,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
