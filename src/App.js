import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { showNotification } from "./Store/cartSlice";
import Notification from "../src/components/Cart/Notification";

function App() {
  const showCart = useSelector((state) => state.cart.isShown);
  const cart = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          title: "Sending...",
          message: "Sending Cart Data",
          status: "Pending",
        })
      );

      const response = await fetch(
        "https://foodorderhttps-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        // throw new Error("Something wrong while sending the Data!");
      }
      const data = await response.json();

      dispatch(
        showNotification({
          title: "success",
          message: "Sending Cart Data Successfully",
          status: "success!",
        })
      );
    };
    sendCartData().catch((error) => {
      dispatch(
        showNotification({
          title: "Error!",
          message: "Sending Cart Data failed",
          status: "error",
        })
      );
    });
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
