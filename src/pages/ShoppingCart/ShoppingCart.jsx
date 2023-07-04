import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} from "../../Redux/cartSlice";
import { createOrder } from "../../services/api";
import styles from "./ShoppingCart.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (categoryIndex, productIndex) => {
    dispatch(increaseQuantity({ categoryIndex, productIndex }));
  };

  const handleDecreaseQuantity = (categoryIndex, productIndex) => {
    dispatch(decreaseQuantity({ categoryIndex, productIndex }));
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !phone || !address || !cart) {
      toast.warn("Please add items to cart and fill out all form fields");
      return;
    }

    const order = {
      name,
      email,
      phone,
      address,
      products: cart,
      total,
    };

    try {
      await createOrder(order);

      setName("");
      setEmail("");
      setPhone("");
      setAddress("");

      toast.success("Your order is accept");

      dispatch(clearCart());
    } catch (error) {
      console.log(error);
      toast.error("There was an error when I sent the order, please try again");
    }
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>Your cart is empty</div>
      ) : (
        <div className={styles.cart}>
          <div className={styles.cardlist}>
            {cart.map((category, categoryIndex) => (
              <div key={category.category} className={styles.category}>
                <div className={styles.categoryTitle}>{category.category}</div>
                {category.products.map((product, productIndex) => (
                  <div key={product._id} className={styles.card}>
                    <img src={product.image} alt={product.title} width={280} />
                    <div>{product.title}</div>
                    <div>{product.price} UAH</div>
                    <div>
                      Quantity:
                      <button
                        onClick={() =>
                          handleDecreaseQuantity(categoryIndex, productIndex)
                        }
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        onClick={() =>
                          handleIncreaseQuantity(categoryIndex, productIndex)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.contacts}>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.submit}>
            <div className={styles.total}>Total: {total}</div>
            <button className={styles.btn} onClick={handleSubmit} type="submit">
              Submit
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
