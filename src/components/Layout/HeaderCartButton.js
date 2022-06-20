import React, { useContext } from 'react';
import CartContex from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import s from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContex);

  const numberOfCartItems = cartCtx.items.reduce((curNun, item) => {
    return curNun + item.amount
  }, 0);

  return (
    <button className={s.button} onClick={props.onClick}>
      <span className={s.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={s.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton