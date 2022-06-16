import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg'
import s from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <Fragment>
      <header className={s.header}>
        <h1>React shop</h1>
        <HeaderCartButton />
      </header>
      <div className={s['main-image']}>
        <img src={mealsImage}/>
      </div>
    </Fragment>
  )
}

export default Header 