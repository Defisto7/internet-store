import React, { useReducer } from 'react';
import CartContex from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }

  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dipatchCartAction] =  useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dipatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = id => {
    dipatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContex.Provider value={cartContex}>
      {props.children}
    </CartContex.Provider>
  )
}

export default CartProvider