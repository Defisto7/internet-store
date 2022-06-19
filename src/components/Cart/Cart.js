import React from 'react'
import Modal from '../UI/Modal';
import s from './Cart.module.css'

function Cart(props) {
  const cartItems = <ul className={s['cart-items']}>{[{id: 'c1', name: 'Sushi', amount: 2, proce: 12.99}].map(item => <li>{item.name}</li>)}</ul>;

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={s.total}>
        <span>Total Amount</span>
        <span>35.47</span>
      </div>
      <div className={s.actions}>
        <button className={s['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={s.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart