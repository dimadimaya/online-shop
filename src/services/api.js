import axios from "axios";

axios.defaults.baseURL = "https://online-shop-backend.onrender.com/api";

export async function getHamburgers() {
  try {
    const { data } = await axios.get("/hamburgers");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPizzas() {
  try {
    const { data } = await axios.get("/pizzas");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getSoups() {
  try {
    const { data } = await axios.get("/soups");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createOrder(order) {
  try {
    await axios.post("/orders", order);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
