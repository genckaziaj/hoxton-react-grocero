import { StoreItem } from "../data/storeItems";
import { StoreItems } from "./StoreItems";

export function HeaderStore({
  storeItemsCopy,
  getItemImagePath,
  increaseQuantity,
}: any) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        {storeItemsCopy.map((storeItem: StoreItem) => (
          <StoreItems
            key={storeItem.id}
            storeItem={storeItem}
            getItemImagePath={getItemImagePath}
            increaseQuantity={increaseQuantity}
          />
        ))}
      </ul>
    </header>
  );
}
