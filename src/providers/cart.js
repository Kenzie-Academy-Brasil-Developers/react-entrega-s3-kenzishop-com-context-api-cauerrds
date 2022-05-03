import { createContext, useState } from "react";

export const CartContext = createContext(
  JSON.parse(localStorage.getItem("@kenzieShop/CART")) || []
);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@kenzieShop/CART")) || []
  );

  const addToCart = (produto) => {
    const exist = cart.find((prod) => prod.id === produto.id);
    if (exist) {
      const novaLista = cart.map((prod) => {
        return prod.id === produto.id
          ? { ...prod, quantity: prod.quantity + 1 }
          : prod;
      });
      localStorage.setItem("@kenzieShop/CART", JSON.stringify(novaLista));
      setCart(novaLista);
    } else {
      const novaLista = [...cart, { ...produto, quantity: 1 }];
      localStorage.setItem("@kenzieShop/CART", JSON.stringify(novaLista));
      setCart(novaLista);
    }
  };

  const removeFromCart = (produto) => {
    const novaLista = cart.filter((prod) => {
      if (prod.id === produto.id) {
        if (prod.quantity > 1) {
          prod.quantity = prod.quantity - 1;
          return prod;
        }
      } else {
        return prod;
      }
    });
    localStorage.setItem("@kenzieShop/CART", JSON.stringify(novaLista));

    setCart(novaLista);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
