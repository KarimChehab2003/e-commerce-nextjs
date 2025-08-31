import { create } from "zustand";
import { CartItem } from "../lib/definitions";

type CartStore = {
  cart: CartItem[];

  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;

  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  // Cart Actions
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem)
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({ cart: state.cart.filter(({ id }) => id !== productId) })),
  clearCart: () => set({ cart: [] }),

  // Quantity Updates
  incrementQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decrementQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),
}));

export const selectCart = (state: CartStore) => state.cart;
export const selectAddToCart = (state: CartStore) => state.addToCart;
export const selectRemoveFromCart = (state: CartStore) => state.removeFromCart;
export const selectClearCart = (state: CartStore) => state.clearCart;
export const selectIncrementQuantity = (state: CartStore) =>
  state.incrementQuantity;
export const selectDecrementQuantity = (state: CartStore) =>
  state.decrementQuantity;
