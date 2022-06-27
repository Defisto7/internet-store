import { useRef } from 'react';

import s from './Checkout.module.css'

function Checkout(props) {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const canfirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const streetInput = streetInputRef.current.value;
    const postalCodeInput = postalCodeInputRef.current.value;
    const cityInput = cityInputRef.current.value;
  }
  return (
    <form onSubmit={canfirmHandler}>
      <div className={s.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef}/>
      </div>
      <div className={s.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}/>
      </div>
      <div className={s.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef}/>
      </div>
      <div className={s.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}/>
      </div>
      <div className={s.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={s.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout