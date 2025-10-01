import React from "react";

export default function CartItem({ item, onIncrement, onDecrement }) {
  return (
    <li className="cart-item">
      <span className="ci-emoji">{item.emoji}</span>
      <span className="ci-name">{item.name}</span>
      <div className="ci-qty-controls">
        <button className="qty-btn" aria-label="decrement" onClick={onDecrement}>−</button>
        <span className="qty-box">{item.quantity}</span>
        <button className="qty-btn" aria-label="increment" onClick={onIncrement}>+</button>
      </div>
    </li>
  );
}