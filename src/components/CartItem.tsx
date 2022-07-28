export function CartItem({
  storeItem,
  getItemImagePath,
  increaseQuantity,
  decreaseQuantity,
}: any) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={getItemImagePath(storeItem)}
        alt="beetroot"
      />
      <p>{storeItem.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => {
          decreaseQuantity(storeItem);
        }}
      >
        -
      </button>
      <span className="quantity-text center">{storeItem.inCart}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => {
          increaseQuantity(storeItem);
        }}
      >
        +
      </button>
    </li>
  );
}
