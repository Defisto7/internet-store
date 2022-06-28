import React from 'react';

const CartContex = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {}
});

export default CartContex