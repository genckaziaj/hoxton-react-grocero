import { useState } from "react";
import { HeaderStore } from "./components/HeaderStore";
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

  function getCartItems() {
    return storeItemsCopy.filter((item: StoreItem) => item.inCart > 0);
  }

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
      <HeaderStore
        storeItemsCopy={storeItemsCopy}
        getItemImagePath={getItemImagePath}
        increaseQuantity={increaseQuantity}
      />
      <Cart
        getCartItems={getCartItems()}
        getItemImagePath={getItemImagePath}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        getTotal={getTotal}
      />
    </div>
  );
}

export default App;
