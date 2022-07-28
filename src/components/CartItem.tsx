export function CartItem({ storeItem, getItemImagePath }: any) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={getItemImagePath(storeItem)}
        alt="beetroot"
      />
      <p>{storeItem.name}</p>
      <button className="quantity-btn remove-btn center">-</button>
      <span className="quantity-text center">{storeItem.inCart}</span>
      <button className="quantity-btn add-btn center">+</button>
    </li>
  );
}
