import React from 'react';
import classes from './MyButton.module.css';

// function MyButton({ children, ...props }) {
function MyButton() {
  return (
    // <button {...props} className={classes.myBtn}>
    //   {children}
    // </button>
    <button className={classes.myBtn}>
      нажми меня
    </button>
  );
}

export default MyButton;
