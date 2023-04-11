import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggle } from "../../Store/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.product.totalQuantity);
  const clickHandler = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
