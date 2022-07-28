export function StoreItemList({ storeItem, getItemImagePath }: any) {
  return (
    <li>
      <div className="store--item-icon">
        <img src={getItemImagePath(storeItem)} alt="beetroot" />
      </div>
      <button>Add to cart</button>
    </li>
  );
}
