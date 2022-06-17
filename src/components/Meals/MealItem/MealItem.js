import React from 'react';
import s from './MealItem.module.css'


function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={s.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={s.description}>{props.description}</div>
        <div className={s.price}>{price }</div>
        </div>
      <div>

      </div>
    </li>
  )
}

export default MealItem