import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { getHamburgers } from "../../services/api";
import styles from "./Hamburgers.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Hamburgers = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getHamburgers();
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
