import { StoreItem } from "../data/storeItems";
import { CartItem } from "./CartItem";
import { Total } from "./Total";

export function Cart({
  storeItemsCopy,
  getItemImagePath,
  increaseQuantity,
  decreaseQuantity,
  getTotal,
}: any) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {storeItemsCopy.map((storeItem: StoreItem) => (
            <CartItem
              key={storeItem.id}
              storeItem={storeItem}
              getItemImagePath={getItemImagePath}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
        </ul>
      </div>
      <Total getTotal={getTotal} />
    </main>
  );
}
