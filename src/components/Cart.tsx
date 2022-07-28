import { StoreItem } from "../data/storeItems";

export function Cart({ storeItems }: any) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {storeItems.map((storeItem: StoreItem) => (
            <li key={storeItem.id}>
              <img
                className="cart--item-icon"
                src={getItemImagePath(storeItem)}
                alt="beetroot"
              />
              <p>{storeItem.name}</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">{storeItem.inCart}</span>
              <button
                className="quantity-btn add-btn center"
                onClick={() => increaseQuantity(storeItem)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£0.00</span>
        </div>
      </div>
    </main>
  );
}
