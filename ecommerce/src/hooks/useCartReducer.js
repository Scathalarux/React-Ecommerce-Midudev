import { cartReducer } from "../reducers/cart";
import { useReducer } from "react";

const initialState = [];

export function useCartReducer() {
  /*
    Uso del hook useReducer
  */
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });

  return { state, addToCart, removeFromCart, clearCart };
}
