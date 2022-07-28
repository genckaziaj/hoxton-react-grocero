import { StoreItem } from "../data/storeItems";
import { CartItem } from "./CartItem";
import { Total } from "./Total";

export function Cart({ storeItems, getItemImagePath }: any) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {storeItems.map((storeItem: StoreItem) => (
            <CartItem
              key={storeItem.id}
              storeItem={storeItem}
              getItemImagePath={getItemImagePath}
            />
          ))}
        </ul>
      </div>
      <Total />
    </main>
  );
}
