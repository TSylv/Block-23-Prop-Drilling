import React, { useState } from "react";
import plantsData from "./data.js";
import PlantList from "./Components/Plants/PlantList.jsx";
import Cart from "./Components/Cart/Cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === plant.id);
      if (existing) {
        return prev.map((p) =>
          p.id === plant.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { id: plant.id, name: plant.name, emoji: plant.emoji, quantity: 1 }];
    });
  };

  const incrementQuantity = (plantId) => {
    setCart((prev) =>
      prev.map((p) => (p.id === plantId ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decrementQuantity = (plantId) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === plantId ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  return (
    <div className="page">
      <h1 className="page-title">
        Proper Plants <span role="img" aria-label="plant">🌱</span>
      </h1>

      <div className="layout">
        <section className="plants-panel">
          <h2>Plants</h2>
          <PlantList plants={plantsData} onAdd={addToCart} />
        </section>

        <aside className="cart-panel">
          <Cart
            items={cart}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
          />
        </aside>
      </div>
    </div>
  );
}