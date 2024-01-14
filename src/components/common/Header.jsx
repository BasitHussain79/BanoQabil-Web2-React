import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header id={styles.header}>
      <h1>
        Awesome Expense Tracker <i className='fa-solid fa-rocket'></i>
      </h1>
    </header>
  );
};

export default Header;
