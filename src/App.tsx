import { useState } from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import initialStoreItems, { StoreItem } from "./data/storeItems";

import "./App.css";

function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems);

  const storeItemsCopy = structuredClone(storeItems);

  function getItemImagePath(item: StoreItem) {
    let id = String(item.id).padStart(3, "0");
    return `assets/icons/${id}-${item.name}.svg`;
  }

  // function getCartItems() {
  //   return storeItems.filter((item: StoreItem) => item.inCart > 0);
  // }

  // output: the current total
  function getTotal() {
    return storeItems.map((item: StoreItem) => item.price * item.inCart);
  }

  function increaseQuantity(item: StoreItem) {
    if (item.stock === 0) return;

    item.inCart++;
    item.stock--;
    setStoreItems(storeItemsCopy);
  }

  function decreaseQuantity(item: StoreItem) {
    if (item.inCart > 0) {
      item.inCart--;
      item.stock++;
      setStoreItems(storeItemsCopy);
    }
  }

  return (
    <div>
      <Header
        storeItemsCopy={storeItemsCopy}
        getItemImagePath={getItemImagePath}
        increaseQuantity={increaseQuantity}
      />
      <Cart
        storeItemsCopy={storeItemsCopy}
        getItemImagePath={getItemImagePath}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        getTotal={getTotal}
      />
    </div>
  );
}

export default App;
