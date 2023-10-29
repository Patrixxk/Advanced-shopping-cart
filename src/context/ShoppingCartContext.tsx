import { useContext, createContext, ReactNode, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartitem: Cartitem[];
};

type Cartitem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartitem, setCartItems] = useLocalStorage<Cartitem[]>(
    "shopping-cart",
    []
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [setOpen, setIsOpen] = useState(false);
  const cartQuantity = cartitem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function openCart() {
    setIsOpen(true);
  }
  function closeCart() {
    setIsOpen(false);
  }

  function getItemQuantity(id: number) {
    return cartitem.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => id !== item.id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartitem,
      }}
    >
      {children}
      <ShoppingCart isOpen={setOpen} />
    </ShoppingCartContext.Provider>
  );
}
