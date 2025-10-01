import React from "react";
import CartItem from "./CartItem.jsx";

export default function Cart({ items, onIncrement, onDecrement }) {
  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="cart-list">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={() => onIncrement(item.id)}
              onDecrement={() => onDecrement(item.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}