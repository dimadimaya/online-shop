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
