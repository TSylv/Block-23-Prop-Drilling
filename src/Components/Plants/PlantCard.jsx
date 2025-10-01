import React from "react";

export default function PlantCard({ plant, onAdd }) {
  return (
    <div className="plant-card">
      <div className="plant-image" aria-label={plant.name}>
        {plant.emoji}
      </div>
      <div className="plant-name">{plant.name}</div>
      <button className="add-btn" onClick={() => onAdd(plant)}>
        Add to cart
      </button>
    </div>
  );
}