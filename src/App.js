import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Shop } from "./pages/Shop/Shop";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { Pizzas } from "./pages/Pizzas/Pizzas";
import { Hamburgers } from "./pages/Hamburgers/Hamburgers";
import { Soups } from "./pages/Soups/Soups";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/shop" element={<Shop />}>
          <Route path="pizzas" element={<Pizzas />} />
          <Route path="hamburgers" element={<Hamburgers />} />
          <Route path="soups" element={<Soups />} />
        </Route>
        <Route path="/cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}

export default App;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import "./App.css";

// async function fetchData() {
//   try {
//     const { data } = await axios.get("http://localhost:3000/api/soups");
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await fetchData();
//         setData(result);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getData();
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <div>
//           {/* Ваши действия с данными */}
//           {data.data.results.map((product) => (
//             <div key={product._id}>
//               <img src={product.image} alt={product.name} />
//               <div>{product.name}</div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

// export default App;
