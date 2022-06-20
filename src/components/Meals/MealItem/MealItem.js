import React, {useContext} from 'react';
import CartContex from '../../../store/cart-context';
import s from './MealItem.module.css'
import MealItemForm from './MealItemForm';


function MealItem(props) {
  const cartCtx = useContext(CartContex);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.prise
    });
  };

  return (
    <li className={s.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={s.description}>{props.description}</div>
        <div className={s.price}>{price }</div>
        </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}

export default MealItem