import React from 'react';
import Input from '../../UI/Input';
import s from './MealItemForm.module.css'

function MealItemForm(props) {
  return (
    <form className={s.form}>
      <Input label="Amount" input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '9',
        step: '1',
        defaultValue: '1'
      }}/>
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm