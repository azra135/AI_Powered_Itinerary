import React from "react";

function ItineraryDisplay({ plan }) {
  return (
    <div>
      <h3>Your Itinerary</h3>
      <ul>
        {plan.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItineraryDisplay;
