import { StoreItem } from "../data/storeItems";
import { StoreItemList } from "./StoreItemList";

export function Header({ storeItems, getItemImagePath }: any) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        {storeItems.map((storeItem: StoreItem) => (
          <StoreItemList
            key={storeItem.id}
            storeItem={storeItem}
            getItemImagePath={getItemImagePath}
          />
        ))}
      </ul>
    </header>
  );
}
