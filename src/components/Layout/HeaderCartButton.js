import React, { useContext, useEffect, useState } from 'react';
import CartContex from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import s from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContex);
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNun, item) => {
    return curNun + item.amount
  }, 0);

  const btnClasses = `${s.button} ${btnIsHighlighted ? s.bump: ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={s.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={s.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton