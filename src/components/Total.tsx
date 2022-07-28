export function Total({ getTotal }: any) {
  function totalPrices() {
    let prices = getTotal();
    let total = 0;

    for (let price of prices) {
      total += price;
    }

    return total;
  }

  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{totalPrices().toFixed(2)}</span>
      </div>
    </div>
  );
}
