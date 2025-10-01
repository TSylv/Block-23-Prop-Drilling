import React from "react";
import PlantCard from "./PlantCard.jsx";

export default function PlantList({ plants, onAdd }) {
  return (
    <div className="plant-grid">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onAdd={onAdd} />
      ))}
    </div>
  );
}