import React, { useContext } from 'react'
import CartContex from '../../store/cart-context';
import Modal from '../UI/Modal';
import s from './Cart.module.css'
import CartItem from './CartItem';

function Cart(props) {
  const cartCtx = useContext(CartContex)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };
  
  const cartItems = (
    <ul className={s['cart-items']}>
    {cartCtx.items.map((item) => (
      <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null, item.id)} 
        onAdd={cartItemAddHandler.bind(null, item)}
        />
        ))}
    </ul>);

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={s.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={s.actions}>
        <button className={s['button--alt']} onClick={props.onHideCart}>Close</button>
        {hasItems && <button className={s.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart