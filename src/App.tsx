import { useState } from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import initialStoreItems, { StoreItem } from "./data/storeItems";

import "./App.css";

function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems);

  function getItemImagePath(item: StoreItem) {
    let id = String(item.id).padStart(3, "0");
    return `assets/icons/${id}-${item.name}.svg`;
  }

  function getCartItems() {
    return storeItems.filter((item: StoreItem) => item.inCart > 0);
  }

  // output: the current total
  function getTotal() {
    return storeItems.map((item: StoreItem) => item.price * item.inCart);
  }

  function increaseQuantity(item: StoreItem) {
    if (item.stock === 0) return;

    item.inCart++;
    item.stock--;
  }

  function decreaseQuantity(item: StoreItem) {
    if (item.inCart > 0) {
      item.inCart--;
      item.stock++;
    }
  }

  return (
    <div>
      <Header storeItems={storeItems} getItemImagePath={getItemImagePath} />
      <Cart storeItems={storeItems} getItemImagePath={getItemImagePath} />
    </div>
  );
}

export default App;
