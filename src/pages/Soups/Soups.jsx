import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { getSoups } from "../../services/api";
import styles from "./Soups.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Soups = () => {
  const [data, setData] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getSoups();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`"${product.title}" added to cart`);
  };

  console.log(cart);

  return (
    <div>
      <div>
        {data ? (
          <div className={styles.cardlist}>
            {data.data.results.map((product) => (
              <div key={product._id} className={styles.card}>
                <img src={product.image} alt={product.name} width={280} />
                <div>{product.title}</div>
                <div>{product.price} UAH</div>
                <button onClick={() => handleAddToCart(product)}>
                  add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
