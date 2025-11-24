export const cartReducer = (state, action) => {
  const { payload: actionPayload, type: actionType } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState;
      }

      return [...state, { ...actionPayload, quantity: 1 }];
    }
    case "REMOVE_FROM_CART": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      );

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        if (newState[productInCartIndex].quantity > 1) {
          newState[productInCartIndex].quantity -= 1;
          return newState;
        } else {
          newState.pop(productInCartIndex);
          return newState;
        }
      }

      return state;
    }
    case "CLEAR_CART": {
      return [];
    }
  }
  return state;
};
