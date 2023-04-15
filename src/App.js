import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "../src/components/Cart/Notification";
import { sendCartData } from "./Store/cartSlice";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.cart.isShown);
  const cart = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
