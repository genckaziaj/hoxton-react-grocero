import { useState } from "react";

import "./App.css";
import beetroot from "./assets/icons/001-beetroot.svg";

function App() {
  const [] = useState();

  return (
    <div>
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          <li>
            <div className="store--item-icon">
              <img src={beetroot} alt="beetroot" />
            </div>
            <button>Add to cart</button>
          </li>
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <li>
              <img className="cart--item-icon" src={beetroot} alt="beetroot" />
              <p>beetroot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">1</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
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
    </div>
  );
}

export default App;
