import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHigh, setBtnHigh] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const noOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHigh ? classes.bump : ""}`;
  useEffect(() => {
    if (items.lenght === 0) return;
    setBtnHigh(true);
    const timer = setTimeout(() => {
      setBtnHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button onClick={props.onClickCart} className={btnClasses}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{noOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
